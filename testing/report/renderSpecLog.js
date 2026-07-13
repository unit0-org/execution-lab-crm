import { escapeHtml } from './escapeHtml.js';
import { renderAttachment } from './renderAttachment.js';

// Collapsed by default: a failing row carries its own evidence — the assertion
// error, a screenshot of the page, and the snapshot of what was actually on it.
export function renderSpecLog(spec) {
  const hasOutput = spec && (spec.log || spec.attachments.length);

  if (!hasOutput) return '';

  const evidence = spec.attachments.map(renderAttachment).join('');

  return `<details class="log">
      <summary>output</summary>
      <pre>${escapeHtml(spec.log)}</pre>
      ${evidence}
    </details>`;
}
