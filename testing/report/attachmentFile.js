import { readFileSync, existsSync, statSync } from 'node:fs';
import { relative } from 'node:path';
import { resultsDir } from '../config/paths.js';

// A screenshot you can't open is no evidence, so we inline it — the report has
// to survive being published. Anything too big to embed stays a plain link.
const MAX_EMBED_BYTES = 2_000_000;

export function fitsInline(path) {
  return existsSync(path) && statSync(path).size <= MAX_EMBED_BYTES;
}

export function dataUri(path, contentType) {
  const encoded = readFileSync(path).toString('base64');

  return `data:${contentType};base64,${encoded}`;
}

export function readText(path) {
  return readFileSync(path, 'utf8');
}

export function asLink(item) {
  return {
    name: item.name,
    kind: 'link',
    href: relative(resultsDir, item.path)
  };
}
