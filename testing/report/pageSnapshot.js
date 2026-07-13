const MAX_CHARS = 4000;

// Playwright's accessibility snapshot of the page when the assertion failed —
// the single most useful thing for telling a real bug from a broken test.
export function pageSnapshot(spec) {
  const captured = spec.attachments.find((item) => item.kind === 'text');

  if (!captured) return '(no page snapshot captured)';

  return captured.text.slice(0, MAX_CHARS);
}
