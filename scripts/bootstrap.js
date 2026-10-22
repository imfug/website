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
    .replace(/<table(?=[\s>])/g, '<div class="table-responsive"><table class="table table-bordered table-sm align-top"')
    .replace(/<\/table>/g, '</table></div>')
    .replace(/<img(?![^>]*class=)/g, '<img class="img-fluid"')
    .replace(/<li(?=[\s>])(?![^>]*class=)/g, '<li class="mt-3"')
    .replace(/<blockquote(?=[\s>])/g, '<blockquote class="blockquote border-start ps-3 text-body-secondary"');
  return data;
});
