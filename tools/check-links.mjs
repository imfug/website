// Report links, images and embeds in public/ that point at this site but don't resolve:
// root-relative, relative and absolute (www.imfug.com) URLs, plus #fragments.
import fs from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';

const root = 'public';
const SITE = new URL('https://www.imfug.com/');
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) =>
  e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]);
const pages = walk(root).filter((f) => f.endsWith('.html'));
const docs = new Map();
const load = (f) => {
  if (!docs.has(f)) docs.set(f, cheerio.load(fs.readFileSync(f, 'utf8')));
  return docs.get(f);
};

const bad = new Set();
for (const f of pages) {
  const here = new URL('/' + path.relative(root, f).replace(/index\.html$/, ''), SITE);
  const $ = load(f);
  $('a[href], img[src], iframe[src], object[data], link[href], script[src]').each((_, el) => {
    const raw = ($(el).attr('href') ?? $(el).attr('src') ?? $(el).attr('data')).trim();
    if (/^(mailto|tel|data|javascript):/i.test(raw)) return;
    let u;
    try { u = new URL(raw, here); } catch { bad.add(`${raw}  (invalid)  <- ${path.relative(root, f)}`); return; }
    if (u.host !== SITE.host && u.host !== 'imfug.com') return;
    const p = decodeURIComponent(u.pathname);
    let t = path.join(root, p);
    if (fs.existsSync(t) && fs.statSync(t).isDirectory()) t = path.join(t, 'index.html');
    if (!fs.existsSync(t)) { bad.add(`${u.pathname}  <- ${path.relative(root, f)}`); return; }
    if (u.hash.length > 1 && t.endsWith('.html')) {
      const id = decodeURIComponent(u.hash.slice(1));
      if (!load(t)(`[id="${id}"], a[name="${id}"]`).length) bad.add(`${u.pathname}${u.hash}  (missing anchor)  <- ${path.relative(root, f)}`);
    }
  });
}
console.log(`checked ${pages.length} pages`);
console.log([...bad].sort().join('\n') || 'no broken internal links');
process.exitCode = bad.size ? 1 : 0;
