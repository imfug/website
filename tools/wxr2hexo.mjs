// Convert a WordPress WXR export into Hexo posts/pages (published items only).
// Usage: node tools/wxr2hexo.mjs <export.xml> <uploads-dir> <hexo-source-dir>
import fs from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';
import TurndownService from 'turndown';
import { gfm } from 'turndown-plugin-gfm';
import { XMLParser } from 'fast-xml-parser';
import yaml from 'js-yaml';

const [xmlPath, uploadsSrc, out] = process.argv.slice(2);
const HOSTS = /^https?:\/\/(www\.)?imfug\.com/;

const parser = new XMLParser({
  parseTagValue: false,
  ignoreAttributes: false,
  isArray: (name) => name === 'item' || name === 'category',
});
const items = parser.parse(fs.readFileSync(xmlPath, 'utf8')).rss.channel.item;
const rows = items.filter(
  (i) => ['post', 'page'].includes(i['wp:post_type']) && i['wp:status'] === 'publish',
);
const pathOf = (i) => new URL(i.link).pathname;
const known = new Set(rows.map(pathOf));
// private pages (members area, meeting notes) have no static equivalent: links to them become plain text
const privSlugs = new Set(
  items.filter((i) => ['post', 'page'].includes(i['wp:post_type']) && i['wp:status'] === 'private')
    .map((i) => i['wp:post_name']),
);
// paths the live site redirected to documents (inferred from the file names)
const REDIRECTS = {
  '/TR/timecode-in-imf/': '/assets/2020/11/imfug-001-bp-timecode-in-imf.pdf',
  '/TR/pkg-and-delivery/': '/assets/2020/11/imfug-002-bp-pkg-and-delivery.pdf',
  '/TR/imsc-authoring/': '/assets/2021/03/imfug-003-bp-imsc-authoring-2021-02-04.pdf',
  '/TR/audio-track-files/': '/assets/2020/11/imfug-004-bp-audio-track-files-2020-11-10.pdf',
  '/documents/ams-2019-workshop-outcome/': '/assets/2019/11/digital-preservation-with-imf-v1.pdf',
};

// featured images ("banners"): post id -> attachment URL
const attachments = new Map(
  items.filter((i) => i['wp:post_type'] === 'attachment').map((i) => [String(i['wp:post_id']), i['wp:attachment_url']]),
);
const featuredImage = (it) => {
  const id = [].concat(it['wp:postmeta'] ?? []).find((m) => m['wp:meta_key'] === '_thumbnail_id')?.['wp:meta_value'];
  const url = id && attachments.get(String(id));
  return url ? localize(url) : undefined;
};

const esc = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// TablePress tables, keyed by the id used in [table id=N /]
const tables = new Map();
for (const it of items.filter((i) => i['wp:post_type'] === 'tablepress_table')) {
  const metas = [].concat(it['wp:postmeta'] ?? []);
  const id = metas.find((m) => m['wp:meta_key'] === '_tablepress_export_table_id')?.['wp:meta_value'];
  if (id) tables.set(String(id), JSON.parse(it['content:encoded']));
}
const renderTable = (rows) =>
  '<table><tbody>' + rows.map((r) => '<tr>' + r.map((c) => `<td>${c}</td>`).join('') + '</tr>').join('') + '</tbody></table>';

// [insert page='slug' display='link'] (Insert Pages plugin): a link to that page or post
const bySlug = new Map(rows.map((i) => [i['wp:post_name'], i]));
const insertLink = (page) => {
  const it = bySlug.get(page.replace(/\/+$/, '').split('/').pop());
  return it ? `<a href="${pathOf(it)}">${esc(it.title)}</a>` : '';
};

function localize(url) {
  url = url.replace(/^\/wp-content\/uploads\//, '/assets/');
  if (/^\/(?!\/)/.test(url) && !url.startsWith('/assets/')) url = new URL(url, 'https://www.imfug.com').href;
  if (!HOSTS.test(url)) return url;
  const u = new URL(url);
  if (u.pathname.startsWith('/wp-content/uploads/')) return u.pathname.replace('/wp-content/uploads/', '/assets/');
  const norm = u.pathname.replace(/\/+$/, '') + '/';
  if (REDIRECTS[norm]) return REDIRECTS[norm];
  // unknown targets (private pages, non-WordPress paths such as /TR/) stay absolute
  return known.has(norm) || norm === '/' ? norm + u.hash : url;
}

function youtubeId(url) {
  return url.match(/(?:youtu\.be\/|v=|embed\/)([\w-]{11})/)?.[1];
}

function cleanHtml(html) {
  html = html
    .replace(/href="#_ftn1"/g, 'href="#footnote_2"') // dangling in the original (the link text is [2])
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/^[ \t]*(https?:\/\/[^\s<]+(?:[ \t]+https?:\/\/[^\s<]+)*)[ \t]*$/gm, '<p>$1</p>')
    .replace(/\[table id=(\d+) \/\]/g, (m, id) => (tables.has(id) ? renderTable(tables.get(id)) : m))
    .replace(/\[insert page=['"]([^'"]+)['"][^\]]*\]/g, (m, page) => insertLink(page) || m)
    .replace(/\[(?:lastupdated|insert|table|simpletoc)[^\]]*\]/g, '');
  const $ = cheerio.load(html, null, false);
  $('form, script, style, .wp-block-mailchimp-for-wp-form').remove();
  // definition lists become headings (dt) followed by content (dd)
  $('dl').each((_, dl) => {
    $(dl).find('dt').each((_, dt) => { dt.tagName = 'h2'; });
    $(dl).find('dd').each((_, dd) => { dd.tagName = 'div'; });
    $(dl).replaceWith($(dl).contents());
  });
  $('figure.wp-block-embed').each((_, el) => {
    const url = $(el).text().trim();
    const vid = youtubeId(url);
    $(el).replaceWith(
      vid
        ? `<iframe src="https://www.youtube.com/embed/${vid}" width="560" height="315" frameborder="0" allowfullscreen></iframe>`
        : `<p><a href="${url}">${url}</a></p>`,
    );
  });
  // paragraphs made only of bare URLs (WordPress auto-embeds): embed YouTube, link the rest
  $('p').each((_, el) => {
    const urls = $(el).text().trim().split(/\s+/);
    if (!urls.every((u) => /^https?:\/\/\S+$/.test(u))) return;
    $(el).replaceWith(
      urls.map((u) => {
        const vid = youtubeId(u);
        return vid
          ? `<iframe src="https://www.youtube.com/embed/${vid}" width="560" height="315" frameborder="0" allowfullscreen></iframe>`
          : `<p><a href="${localize(u)}">${u}</a></p>`;
      }).join('\n'),
    );
  });
  $('code:empty').remove();
  $('p:empty').remove();
  $('a[href]').each((_, el) => {
    const u = $(el).attr('href');
    if (HOSTS.test(u) || u.startsWith('/')) {
      const p = new URL(u, 'https://www.imfug.com').pathname.replace(/\/+$/, '') + '/';
      if (!known.has(p) && privSlugs.has(p.split('/').filter(Boolean).pop())) $(el).replaceWith($(el).contents());
    }
  });
  // inline styles are presentational only (and image widths fight img-fluid)
  $('[style]').removeAttr('style');
  // tables: drop presentational attributes; alignment becomes Bootstrap's text-center / text-end
  $('td, th').each((_, el) => {
    const hint = [$(el).attr('class'), $(el).attr('align'), $(el).attr('data-align')].join(' ');
    const cls = /center/.test(hint) ? 'text-center' : /right/.test(hint) ? 'text-end' : '';
    if (cls) $(el).attr('data-bs-class', cls);
  });
  $('table, thead, tbody, tfoot, tr, td, th, table img').each((_, el) => {
    for (const a of ['style', 'width', 'height', 'align', 'valign', 'bgcolor', 'border', 'cellpadding', 'cellspacing', 'nowrap']) {
      $(el).removeAttr(a);
    }
  });
  $('*').each((_, el) => {
    for (const a of ['class', 'data-id', 'data-type', 'data-align', 'srcset', 'sizes', 'aria-describedby']) {
      if (el.name !== 'iframe') $(el).removeAttr(a);
    }
    if ($(el).attr('data-bs-class')) {
      $(el).attr('class', $(el).attr('data-bs-class'));
      $(el).removeAttr('data-bs-class');
    }
    const id = $(el).attr('id');
    if (id && /^(wp-|block-)/.test(id)) $(el).removeAttr('id');
    for (const a of ['href', 'src', 'data']) {
      const v = $(el).attr(a);
      if (v) $(el).attr(a, localize(v));
    }
  });
  return $;
}

const td = new TurndownService({ headingStyle: 'atx', bulletListMarker: '-', codeBlockStyle: 'fenced' });
td.use(gfm);
// Markdown can't express these: keep them as raw HTML blocks inside the Markdown
const KEEP = new Set(['IFRAME', 'VIDEO', 'AUDIO', 'OBJECT']);
// a Markdown table needs a header row of <th> cells; other tables stay HTML
const hasHeaderRow = (table) => {
  const tr = table.querySelector('tr');
  return !!tr && [...tr.childNodes].filter((n) => n.nodeType === 1).every((n) => n.nodeName === 'TH');
};
td.addRule('keepHtml', {
  filter: (node) => {
    if (KEEP.has(node.nodeName)) return true;
    if (node.nodeName === 'TABLE') return !hasHeaderRow(node);
    if (/^H[1-6]$/.test(node.nodeName)) return false; // heading ids are regenerated from the text
    return node.hasAttribute('id') || node.hasAttribute('name');
  },
  // blank lines would end a raw HTML block early
  replacement: (_, node) => {
    const html = node.outerHTML.replace(/\n\s*\n/g, '\n');
    // iframes are inline for Turndown, but must sit in their own block so the next lines are parsed as Markdown
    return node.isBlock || node.nodeName === 'IFRAME' ? `\n\n${html}\n\n` : html;
  },
});

// the page title is the h1, so body headings start at h2: shift down when a body uses h1
function demoteHeadings($) {
  const levels = $('h1, h2, h3, h4, h5, h6').map((_, el) => +el.name[1]).get();
  if (!levels.length || Math.min(...levels) > 1) return;
  $('h1, h2, h3, h4, h5, h6').each((_, el) => {
    el.name = `h${Math.min(+el.name[1] + 1, 6)}`;
  });
}

// Markdown tables have no merged cells: a rowspan repeats its text in each row it covered,
// a colspan leaves the extra cells empty
function expandSpans($) {
  $('table').each((_, table) => {
    const rows = $(table).find('tr').toArray();
    if ($(table).find('th').length || !rows.some((r) => $(r).children('[rowspan], [colspan]').length)) return;
    const carry = [];
    rows.forEach((tr, r) => {
      carry[r] ??= {};
      const cells = [];
      let c = 0;
      const takeCarried = () => {
        while (carry[r][c] !== undefined) cells.push(carry[r][c++]);
      };
      for (const cell of $(tr).children().toArray()) {
        takeCarried();
        const rowspan = +$(cell).attr('rowspan') || 1;
        const colspan = +$(cell).attr('colspan') || 1;
        const html = $(cell).html();
        cells.push(html);
        for (let i = 1; i < rowspan; i++) (carry[r + i] ??= {})[c] = html;
        for (let j = 1; j < colspan; j++) cells.push('');
        c += colspan;
      }
      takeCarried();
      $(tr).html(cells.map((h) => `<td>${h}</td>`).join(''));
    });
  });
}

// A headerless table of plain cells becomes a Markdown table with an empty header row
// (the theme's content filter drops empty <thead>s). Tables with merged cells or block content stay HTML.
function addEmptyHeaders($) {
  $('table').each((_, table) => {
    const rows = $(table).find('tr');
    // a first row of <th> is a real header row; <th> row headers further down become plain cells
    if (!rows.length || $(rows[0]).children('th').length === $(rows[0]).children().length) return;
    const widths = rows.map((_, r) => $(r).children('td, th').length).get();
    const simple =
      widths.every((w) => w === widths[0]) &&
      !$(table).find('[rowspan], [colspan], p, ul, ol, div, table table, h1, h2, h3, h4, h5, h6, figure, pre, dl').length;
    if (!simple) return;
    $(table).find('th').each((_, th) => { th.tagName = 'td'; });
    $(table).prepend(`<thead><tr>${'<th></th>'.repeat(widths[0])}</tr></thead>`);
  });
}

function toBody($) {
  demoteHeadings($);
  expandSpans($);
  addEmptyHeaders($);
  $('td br, th br').replaceWith('@@BR@@'); // Turndown's line break would split the table row
  return td.turndown($.html()).replace(/@@BR@@/g, '<br>').replace(/\n{3,}/g, '\n\n').trim() + '\n';
}

const eventPosts = new Set(
  fs.readFileSync(path.join(path.dirname(new URL(import.meta.url).pathname), 'event-posts.txt'), 'utf8')
    .split('\n').filter((l) => l && !l.startsWith('#')),
);
// event pages used to be written as pages: drop stale copies under source/events/
for (const e of fs.existsSync(path.join(out, 'events')) ? fs.readdirSync(path.join(out, 'events'), { withFileTypes: true }) : []) {
  if (e.isDirectory()) fs.rmSync(path.join(out, 'events', e.name), { recursive: true });
}
fs.rmSync(path.join(out, '_posts'), { recursive: true, force: true });
fs.mkdirSync(path.join(out, '_posts'), { recursive: true });
let n = 0;
const usedUploads = new Set();
for (const it of rows) {
  const slug = it['wp:post_name'];
  // pages under /events/ become posts tagged "event", keeping their URLs
  const isEventPage = it['wp:post_type'] === 'page' && slug !== 'events' && pathOf(it).startsWith('/events/');
  const isPost = it['wp:post_type'] === 'post' || isEventPage;
  if (!isPost && slug === 'home') continue;
  const cats = (it.category || []).filter((c) => c['@_domain'] === 'category').map((c) => c['#text']);
  const tags = (it.category || []).filter((c) => c['@_domain'] === 'post_tag').map((c) => c['#text']);
  const fm = { title: String(it.title ?? '').trim(), date: it['wp:post_date'] };
  const banner = featuredImage(it);
  let dest;
  if (isPost) {
    if (cats.length && !(cats.length === 1 && cats[0] === 'Uncategorized')) fm.categories = cats;
    const allTags = isEventPage || eventPosts.has(slug) ? [...new Set([...tags, 'event'])] : tags;
    if (allTags.length) fm.tags = allTags;
    if (isEventPage) fm.permalink = pathOf(it).replace(/^\/|\/$/g, '') + '/';
    dest = path.join(out, '_posts', `${slug}.md`);
  } else {
    // the events page is generated from the posts tagged "event" (see the events layout)
    fm.layout = slug === 'events' ? 'events' : 'page';
    fm.permalink = pathOf(it).replace(/^\/|\/$/g, '') + '/';
    dest = path.join(out, pathOf(it), 'index.md');
  }
  const $body = cleanHtml(it['content:encoded'] ?? '');
  // the products table's last column held only a placeholder logo
  if (slug === 'suppliers') $body('tr').each((_, tr) => { $body(tr).children().last().remove(); });
  const body = !isPost && slug === 'events' ? '' : toBody($body);
  if (banner && isPost) {
    fm.banner = banner;
    usedUploads.add(decodeURIComponent(banner));
  }
  for (const m of body.matchAll(/\/assets\/[^"'<>)\s?#]+/g)) usedUploads.add(decodeURIComponent(m[0]));
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, `---\n${yaml.dump(fm, { lineWidth: -1 })}---\n\n${body}`);
  n++;
}
console.log(`wrote ${n} items`);
const dst = path.join(out, 'assets');
fs.rmSync(dst, { recursive: true, force: true });
// copy all PDFs, and only the other files that pages reference (drops thumbnails,
// unused media, plugin leftovers)
const rel = (src) => path.relative(uploadsSrc, src).split(path.sep).join('/');
fs.cpSync(uploadsSrc, dst, {
  recursive: true,
  filter: (src) =>
    fs.statSync(src).isDirectory() || /\.pdf$/i.test(src) || usedUploads.has('/assets/' + rel(src)),
});
for (const e of fs.readdirSync(dst, { recursive: true, withFileTypes: true }).filter((e) => e.isDirectory()).reverse()) {
  const p = path.join(e.parentPath, e.name);
  if (!fs.readdirSync(p).length) fs.rmdirSync(p);
}
