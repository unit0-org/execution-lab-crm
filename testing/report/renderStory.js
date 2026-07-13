import { escapeHtml } from './escapeHtml.js';
import { renderBehaviour } from './renderBehaviour.js';
import { renderStorySummary } from './renderStorySummary.js';

export function renderStory(story) {
  const behaviours = story.behaviours
    .map((behaviour) => renderBehaviour(story, behaviour))
    .join('');

  return `<details class="story ${story.status}">
    ${renderStorySummary(story)}
    <div class="sbody">
      <p class="us">${escapeHtml(story.story)}</p>
      <ul class="behs">${behaviours}</ul>
    </div>
  </details>`;
}
