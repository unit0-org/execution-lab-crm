import { escapeHtml } from './escapeHtml.js';

function stat(value, label, tone = '') {
  return (
    `<div class="stat"><b class="${tone}">${value}</b>` +
    `<span>${escapeHtml(label)}</span></div>`
  );
}

// Summary before detail: what needs attention reads at a glance.
export function renderStats(summary) {
  const { counts, storyCount } = summary;
  const behaviours = `${summary.behavioursPassed}/${summary.behavioursTotal}`;

  return `<div class="stats">
      ${stat(storyCount, 'Stories')}
      ${stat(counts.pass, 'Pass', 'ok')}
      ${stat(counts.partial, 'Partial', 'warn')}
      ${stat(counts.fail, 'Fail', 'crit')}
      ${stat(counts.notImplemented, 'Not implemented', 'faint')}
      ${stat(behaviours, 'Behaviours')}
    </div>`;
}
