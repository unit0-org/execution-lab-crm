// Playwright colours its output for a terminal; the report is HTML.
const ANSI = /\[[0-9;]*m/g;

export function stripAnsi(text) {
  return String(text || '').replace(ANSI, '');
}
