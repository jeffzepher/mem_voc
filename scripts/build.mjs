import { build } from 'esbuild';
import { readFile, mkdir, copyFile, writeFile } from 'node:fs/promises';

let local = {};
try { local = JSON.parse(await readFile('config.local.json', 'utf8')); }
catch (error) { if (error.code !== 'ENOENT') throw error; }
const config = {
  SUPABASE_URL: process.env.SUPABASE_URL || local.SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY: process.env.SUPABASE_PUBLISHABLE_KEY || local.SUPABASE_PUBLISHABLE_KEY
};
if (!config.SUPABASE_URL || !config.SUPABASE_PUBLISHABLE_KEY?.startsWith('sb_publishable_')) {
  throw new Error('Provide SUPABASE_URL and an sb_publishable_ key using GitHub Secrets or config.local.json.');
}
const url = new URL(config.SUPABASE_URL);
if (url.protocol !== 'https:' || url.username || url.password || url.search || url.hash) throw new Error('SUPABASE_URL must be an HTTPS project URL.');
await mkdir('dist', { recursive: true });
await Promise.all([
  copyFile('index.html', 'dist/index.html'),
  copyFile('src/account.css', 'dist/account.css'),
  copyFile('src/practice.js', 'dist/practice.js'),
  writeFile('dist/config.js', `window.MEMWORDS_CONFIG = Object.freeze(${JSON.stringify(config).replace(/</g, '\\u003c')});\n`),
  writeFile('dist/.nojekyll', ''),
  build({ entryPoints: ['src/account.js'], bundle: true, format: 'iife', outfile: 'dist/account.js', target: ['es2022'], minify: true, legalComments: 'none' })
]);
console.log('Built dist/ with public browser configuration only.');
