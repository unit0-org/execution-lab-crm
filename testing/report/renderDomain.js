import { escapeHtml } from './escapeHtml.js';
import { renderStory } from './renderStory.js';
import { STATUS_BADGES } from './statusLabels.js';

export function renderDomain(domain) {
  const stories = domain.stories.map(renderStory).join('');

  return `<section class="sec">
    <h2>${escapeHtml(domain.title)}</h2>
    ${stories}
  </section>`;
}

export function renderLegend() {
  return Object.values(STATUS_BADGES)
    .map((badge) => `<span class="badge ${badge.tone}">${badge.label}</span>`)
    .join('');
}
