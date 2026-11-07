'use strict';
// Keep addresses from the old WordPress site working:
// - PDFs in source/assets/ are published at their old /wp-content/uploads/ path (and only there: _config.yml
//   excludes them from /assets/), and links to /assets/….pdf are pointed there
// - folder-style addresses listed under `redirects` in _config.yml get a page that forwards to the new location
const fs = require('fs');
const path = require('path');

const ASSETS = path.join(hexo.source_dir, 'assets');
const isPdf = (p) => /\.pdf$/i.test(p);
// /assets/x.pdf -> /wp-content/uploads/x.pdf (other paths unchanged)
const pdfPath = (p) => p.replace(/^(\/?)assets\/(?=[^?#]*\.pdf(?:[?#]|$))/i, '$1wp-content/uploads/');

const pdfs = (dir, rel = '') =>
  fs.readdirSync(path.join(dir, rel), { withFileTypes: true }).flatMap((e) => {
    const r = path.posix.join(rel, e.name);
    if (e.isDirectory()) return pdfs(dir, r);
    return isPdf(e.name) ? [r] : [];
  });

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const redirectPage = (to) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Moved</title>
<meta name="robots" content="noindex">
<link rel="canonical" href="${esc(to)}">
<meta http-equiv="refresh" content="0; url=${esc(to)}">
</head>
<body><p>This page has moved to <a href="${esc(to)}">${esc(to)}</a>.</p></body>
</html>
`;

hexo.extend.generator.register('legacy-urls', function () {
  const urlFor = hexo.extend.helper.get('url_for').bind(hexo);
  const files = fs.existsSync(ASSETS)
    ? pdfs(ASSETS).map((rel) => ({
        path: `wp-content/uploads/${rel}`,
        data: () => fs.createReadStream(path.join(ASSETS, rel)),
      }))
    : [];
  const redirects = Object.entries(this.config.redirects || {}).map(([from, to]) => ({
    path: from.replace(/^\/+/, '').replace(/\/?$/, '/') + 'index.html',
    data: redirectPage(/^[a-z]+:/i.test(to) ? to : urlFor(pdfPath(to))),
  }));
  return [...files, ...redirects];
});

// Runs after scripts/fix-relative-links.js has added the site root to every local link
hexo.extend.filter.register('after_post_render', (data) => {
  const root = hexo.config.root || '/';
  const re = new RegExp(`(\\s(?:href|src|data)=")${root.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(assets/[^"]*)`, 'g');
  data.content = data.content.replace(re, (m, attr, rest) => `${attr}${root}${pdfPath(rest)}`);
  return data;
}, 20);
