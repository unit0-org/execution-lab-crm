import { stripAnsi } from './stripAnsi.js';

function joinOutput(entries) {
  return (entries || [])
    .map((entry) => (typeof entry === 'string' ? entry : entry.text || ''))
    .join('');
}

// The failure and anything the test printed, so a red row explains itself.
export function specLog(result) {
  const parts = [];
  const error = result.error || {};

  if (error.message) parts.push(stripAnsi(error.message));

  if (error.snippet) parts.push(stripAnsi(error.snippet));

  const out = joinOutput(result.stdout);
  const errors = joinOutput(result.stderr);

  if (out) parts.push(`--- stdout ---\n${out}`);

  if (errors) parts.push(`--- stderr ---\n${errors}`);

  return parts.join('\n\n').trim();
}
