import { escapeHtml } from './escapeHtml.js';
import { STATUS_BADGES } from './statusLabels.js';

// The clickable header: verdict, id, who it's for, and behaviours verified.
export function renderStorySummary(story) {
  const badge = STATUS_BADGES[story.status];
  const role = story.guarantee ? 'Guarantee' : story.role;
  const tone = story.guarantee ? 'guarantee' : '';

  return `<summary>
      <span class="badge ${badge.tone}">${badge.label}</span>
      <span class="sid">${story.id}</span>
      <span class="role ${tone}">${escapeHtml(role)}</span>
      <span class="stitle">${escapeHtml(story.title)}</span>
      <span class="scount">${story.passed}/${story.total}</span>
    </summary>`;
}
