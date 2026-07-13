import { fitsInline, dataUri, readText, asLink } from './attachmentFile.js';

// Images embed as data URIs, text (Playwright's page snapshot) embeds inline,
// and everything else — the trace zip — stays a link.
export function readAttachment(item) {
  const type = item.contentType || '';

  if (!fitsInline(item.path)) return asLink(item);

  if (type.startsWith('image/')) {
    return { name: item.name, kind: 'image', src: dataUri(item.path, type) };
  }

  if (type.startsWith('text/')) {
    return { name: item.name, kind: 'text', text: readText(item.path) };
  }

  return asLink(item);
}
