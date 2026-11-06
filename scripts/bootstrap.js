'use strict';
// Serve Bootstrap's CSS from node_modules, and style rendered content with Bootstrap classes.
const fs = require('fs');
const path = require('path');

hexo.extend.generator.register('bootstrap', () => [
  {
    path: 'css/bootstrap.min.css',
    data: () => fs.createReadStream(path.join(path.dirname(require.resolve('bootstrap/package.json')), 'dist/css/bootstrap.min.css')),
  },
]);

// The Logo page shows logos as thumbnails: previews in the table, larger logos at a quarter width
// (the 150px icon is already thumbnail-sized)
const logoThumbnails = (html) =>
  html.split(/(<table[\s\S]*?<\/table>)/).map((part, i) => {
    const inTable = i % 2 === 1;
    return part.replace(/<img(?![^>]*class=)([^>]*?)src="([^"]*)"/g, (m, attrs, src) => {
      if (/creativecommons\.org/.test(src)) return m; // license badge: leave at its own size
      const wide = !inTable && !/-150x150\./.test(src);
      return `<img class="img-thumbnail${wide ? ' w-25' : ''}"${attrs}src="${src}"`;
    });
  }).join('');

hexo.extend.filter.register('after_post_render', (data) => {
  if (data.source === 'logo/index.md') data.content = logoThumbnails(data.content);
  data.content = data.content
    .replace(/<thead>\s*<tr>(\s*<th[^>]*><\/th>)+\s*<\/tr>\s*<\/thead>\s*/g, '') // empty header rows from Markdown tables
    .replace(/<table(?=[\s>])/g, '<div class="table-responsive"><table class="table table-hover table-sm align-top"')
    .replace(/<\/table>/g, '</table></div>')
    // cells holding an image get a bounded width (the image itself scales with img-fluid)
    .replace(/<(td|th)(?![^>]*class=)([^>]*)>(?=\s*(?:<a[^>]*>\s*)?<img)/g, '<$1 class="w-25"$2>')
    .replace(/<img(?![^>]*class=)/g, '<img class="img-fluid"')
    .replace(/<li(?=[\s>])(?![^>]*class=)/g, '<li class="mt-3"')
    .replace(/<h2(?=[\s>])(?![^>]*class=)/g, '<h2 class="mt-5"')
    .replace(/<blockquote(?=[\s>])/g, '<blockquote class="blockquote border-start ps-3 text-body-secondary"');
  // Markdown links and images get the site root from the renderer; raw HTML (tables, iframes, <a>) doesn't,
  // so add it where it's missing when the root isn't /
  const root = hexo.config.root || '/';
  if (root !== '/') {
    data.content = data.content.replace(/(\s(?:href|src|data)=")\/(?!\/)([^"]*)/g, (m, attr, rest) =>
      `${attr}${(`/${rest}`).startsWith(root) ? '/' : root}${rest}`);
  }
  return data;
});
