import { readAttachment } from './readAttachment.js';

// Playwright can report the same file twice; keep one of each.
export function specAttachments(result) {
  const byPath = new Map();

  for (const item of result.attachments || []) {
    if (item.path) byPath.set(item.path, item);
  }

  return [...byPath.values()].map(readAttachment);
}
