import { readFile, readdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root = fileURLToPath(new URL('../', import.meta.url));
const manifest = await readFile(path.join(root, 'SHA256SUMS.txt'), 'utf8');
const expected = new Map();
for (const line of manifest.trim().split(/\r?\n/)) {
  const match = /^([a-f0-9]{64})  (dist\/.+)$/.exec(line);
  if (!match || match[2].split('/').includes('..')) throw new Error('Invalid checksum entry');
  if (expected.has(match[2])) throw new Error(`Duplicate checksum: ${match[2]}`);
  expected.set(match[2], match[1]);
}
async function listFiles(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await listFiles(target));
    else if (entry.isFile()) files.push(path.relative(root, target).split(path.sep).join('/'));
    else throw new Error(`Unsupported file type: ${target}`);
  }
  return files;
}
const files = await listFiles(path.join(root, 'dist'));
if (files.length !== expected.size) throw new Error('Site file count differs from checksum manifest');
let references = 0;
for (const file of files) {
  const bytes = await readFile(path.join(root, file));
  const digest = createHash('sha256').update(bytes).digest('hex');
  if (digest !== expected.get(file)) throw new Error(`Checksum mismatch: ${file}`);
  if (file.endsWith('.html')) {
    for (const [, value] of bytes.toString('utf8').matchAll(/(?:src|href)="([^"]+)"/g)) {
      if (/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(value)) continue;
      const target = value.split(/[?#]/)[0];
      if (!target) continue;
      const resolved = path.resolve(root, path.dirname(file), target);
      const relative = path.relative(root, resolved).split(path.sep).join('/');
      if (!expected.has(relative)) throw new Error(`Missing local reference: ${file} -> ${value}`);
      references++;
    }
  }
}
execFileSync(process.execPath, ['--check', path.join(root, 'dist/script.js')], { stdio: 'inherit' });
console.log(`Verified ${files.length} site files byte-for-byte, ${references} local references, and JavaScript syntax.`);
console.log('Static output is ready in dist/. No file was transformed.');
