// Check links to imfug.com (and subdomains) with linkinator, options from linkinator.config.json.
// public/ is mounted at the Hexo root (e.g. /website/) so the site's root-relative links resolve.
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import yaml from 'js-yaml';
import { LinkChecker } from 'linkinator';

const root = yaml.load(fs.readFileSync('_config.yml', 'utf8')).root || '/';
const config = JSON.parse(fs.readFileSync('linkinator.config.json', 'utf8'));
const { skip, verbosity, ...options } = config;

const mount = fs.mkdtempSync(path.join(os.tmpdir(), 'check-urls-'));
const sitePath = path.join(mount, root); // e.g. <tmp>/website/
fs.mkdirSync(path.dirname(sitePath.replace(/\/$/, '')), { recursive: true });
if (root !== '/') fs.symlinkSync(path.resolve('public'), sitePath.replace(/\/$/, ''));

let broken = 0, scanned = 0;
const checker = new LinkChecker();
checker.on('link', (r) => {
  scanned++;
  if (r.state === 'BROKEN') {
    broken++;
    console.log(`[${r.status}] ${r.url}\n    on ${r.parent}`);
  }
});
try {
  await checker.check({
    ...options,
    path: root === '/' ? path.resolve('public') : root.slice(1),
    serverRoot: root === '/' ? undefined : mount,
    linksToSkip: skip,
  });
} finally {
  fs.rmSync(mount, { recursive: true, force: true });
}
console.log(`scanned ${scanned} links, ${broken} broken`);
process.exitCode = broken ? 1 : 0;
