import { escapeHtml } from './escapeHtml.js';
import { formatDuration } from './formatDuration.js';

function stat(value, label, tone = '') {
  return (
    `<div class="stat"><b class="${tone}">${value}</b>` +
    `<span>${escapeHtml(label)}</span></div>`
  );
}

// Summary before detail: what needs attention reads at a glance.
export function renderStats(summary) {
  const { counts, storyCount, run } = summary;
  const behaviours = `${summary.behavioursPassed}/${summary.behavioursTotal}`;
  const runTime = run ? formatDuration(run.duration) : '—';

  return `<div class="stats">
      ${stat(storyCount, 'Stories')}
      ${stat(counts.pass, 'Pass', 'ok')}
      ${stat(counts.partial, 'Partial', 'warn')}
      ${stat(counts.fail, 'Fail', 'crit')}
      ${stat(counts.notImplemented, 'Not implemented', 'faint')}
      ${stat(behaviours, 'Behaviours')}
      ${stat(runTime, 'Run time')}
    </div>`;
}
