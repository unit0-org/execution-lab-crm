import { escapeHtml } from './escapeHtml.js';
import { OUTCOME_MARKS } from './statusLabels.js';
import { formatDuration } from './formatDuration.js';
import { renderSpecLog } from './renderSpecLog.js';

// Each behaviour shows its own verdict and how long it took, so an unverified
// one can't hide inside a green story.
export function renderBehaviour(story, behaviour) {
  const title = `${story.id} · ${behaviour}`;
  const spec = story.specs.find((item) => item.title === title);
  const outcome = OUTCOME_MARKS[spec ? spec.outcome : 'missing'];
  const took = spec ? formatDuration(spec.duration) : '';

  return `<li class="beh ${outcome.tone}">
      <span class="mk">${outcome.mark}</span>
      <span class="bt">${escapeHtml(behaviour)}${renderSpecLog(spec)}</span>
      <span class="dur">${took}</span>
    </li>`;
}
