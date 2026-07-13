import { relative } from 'node:path';
import { resultsDir } from '../config/paths.js';

// Screenshots and traces, linked relative to the report — which sits next to
// the artifacts directory they live in.
export function specAttachments(result) {
  const byPath = new Map();

  for (const item of result.attachments || []) {
    if (item.path) byPath.set(item.path, item.name);
  }

  return [...byPath].map(([path, name]) => ({
    name,
    href: relative(resultsDir, path)
  }));
}
