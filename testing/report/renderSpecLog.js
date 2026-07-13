import { escapeHtml } from './escapeHtml.js';
import { renderAttachment } from './renderAttachment.js';
import { renderFixPrompt } from './renderFixPrompt.js';

// Collapsed by default: a failing row carries its own evidence — the assertion
// error, a screenshot, the page snapshot — and a prompt to go fix it.
export function renderSpecLog(spec, story, behaviour) {
  const hasOutput = spec && (spec.log || spec.attachments.length);

  if (!hasOutput) return '';

  const evidence = spec.attachments.map(renderAttachment).join('');

  return `<details class="log">
      <summary>output</summary>
      <pre>${escapeHtml(spec.log)}</pre>
      ${renderFixPrompt(spec, story, behaviour)}
      ${evidence}
    </details>`;
}
