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

hexo.extend.filter.register('after_post_render', (data) => {
  data.content = data.content
    .replace(/<thead>\s*<tr>(\s*<th[^>]*><\/th>)+\s*<\/tr>\s*<\/thead>\s*/g, '') // empty header rows from Markdown tables
    .replace(/<table(?=[\s>])/g, '<div class="table-responsive"><table class="table table-bordered table-sm align-top"')
    .replace(/<\/table>/g, '</table></div>')
    // cells holding an image get a bounded width (the image itself scales with img-fluid)
    .replace(/<(td|th)(?![^>]*class=)([^>]*)>(?=\s*(?:<a[^>]*>\s*)?<img)/g, '<$1 class="w-25"$2>')
    .replace(/<img(?![^>]*class=)/g, '<img class="img-fluid"')
    .replace(/<li(?=[\s>])(?![^>]*class=)/g, '<li class="mt-3"')
    .replace(/<blockquote(?=[\s>])/g, '<blockquote class="blockquote border-start ps-3 text-body-secondary"');
  return data;
});
