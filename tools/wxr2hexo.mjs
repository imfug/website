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
const HTML_ONLY = 'dl, table, iframe, video, audio, [style], [id]:not(h1, h2, h3, h4, h5, h6), a[name]';

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
  // inline widths fight the responsive img-fluid sizing
  $('img[style]').each((_, el) => {
    const style = $(el).attr('style').replace(/(^|;)\s*width\s*:[^;]*;?/gi, '$1').trim();
    if (style) $(el).attr('style', style);
    else $(el).removeAttr('style');
  });
  $('*').each((_, el) => {
    for (const a of ['class', 'data-id', 'data-type', 'data-align', 'srcset', 'sizes', 'aria-describedby']) {
      if (el.name !== 'iframe') $(el).removeAttr(a);
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

// the page title is the h1, so body headings start at h2: shift down when a body uses h1
function demoteHeadings($) {
  const levels = $('h1, h2, h3, h4, h5, h6').map((_, el) => +el.name[1]).get();
  if (!levels.length || Math.min(...levels) > 1) return;
  $('h1, h2, h3, h4, h5, h6').each((_, el) => {
    el.name = `h${Math.min(+el.name[1] + 1, 6)}`;
  });
}

function toBody($) {
  demoteHeadings($);
  if ($(HTML_ONLY).length) return $.html().replace(/\n\s*\n/g, '\n').trim() + '\n';
  return td.turndown($.html()).replace(/\n{3,}/g, '\n\n').trim() + '\n';
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
  const body = !isPost && slug === 'events' ? '' : toBody(cleanHtml(it['content:encoded'] ?? ''));
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
