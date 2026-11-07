'use strict';
// Add the site root (e.g. /website/ on GitHub Pages) to root-relative links that lack it.

hexo.extend.filter.register('after_post_render', (data) => {
  // Markdown links and images get the site root from the renderer; raw HTML (tables, iframes, <a>) doesn't,
  // so add it where it's missing when the root isn't /
  const root = hexo.config.root || '/';
  if (root !== '/') {
    data.content = data.content.replace(/(\s(?:href|src|data)=")\/(?!\/)([^"]*)/g, (m, attr, rest) =>
      `${attr}${(`/${rest}`).startsWith(root) ? '/' : root}${rest}`);
  }
  return data;
});
