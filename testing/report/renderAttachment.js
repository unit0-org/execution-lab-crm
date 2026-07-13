import { escapeHtml } from './escapeHtml.js';
import { renderScreenshot } from './renderScreenshot.js';

function renderText(item) {
  return `<details class="sub">
      <summary>${escapeHtml(item.name)}</summary>
      <pre>${escapeHtml(item.text)}</pre>
    </details>`;
}

function renderLink(item) {
  const name = escapeHtml(item.name);
  const href = escapeHtml(item.href);

  return `<div class="files"><a href="${href}">${name}</a></div>`;
}

export function renderAttachment(item) {
  if (item.kind === 'image') return renderScreenshot(item);

  if (item.kind === 'text') return renderText(item);

  return renderLink(item);
}
