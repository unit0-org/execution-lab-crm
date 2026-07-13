import { escapeHtml } from './escapeHtml.js';
import { formatDuration } from './formatDuration.js';

// When the run happened and how long it took.
export function renderRunMeta(run) {
  if (!run) return escapeHtml('no test run yet');

  const started = new Date(run.startTime).toISOString().replace('T', ' ');
  const when = started.slice(0, 19);

  return escapeHtml(`${when} UTC · ran in ${formatDuration(run.duration)}`);
}
