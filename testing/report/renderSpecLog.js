import { escapeHtml } from './escapeHtml.js';

function renderLinks(attachments) {
  return attachments
    .map((item) => {
      const href = escapeHtml(item.href);

      return `<a href="${href}">${escapeHtml(item.name)}</a>`;
    })
    .join('');
}

// Collapsed by default: a failing row explains itself without leaving the page,
// and links out to the screenshot and trace for the full story.
export function renderSpecLog(spec) {
  const hasOutput = spec && (spec.log || spec.attachments.length);

  if (!hasOutput) return '';

  return `<details class="log">
      <summary>output</summary>
      <pre>${escapeHtml(spec.log)}</pre>
      <div class="files">${renderLinks(spec.attachments)}</div>
    </details>`;
}
