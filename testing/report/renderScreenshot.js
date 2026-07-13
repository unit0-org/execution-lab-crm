import { escapeHtml } from './escapeHtml.js';

// Embedded as a data URI, so the evidence survives publishing the report.
export function renderScreenshot(item) {
  const alt = escapeHtml(item.name);

  return `<figure class="shot">
      <img src="${item.src}" alt="${alt}" loading="lazy">
      <figcaption>${alt} — the page when it failed</figcaption>
    </figure>`;
}
