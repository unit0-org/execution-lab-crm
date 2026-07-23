// Collapse runs of whitespace to a single space and trim, so formatting
// noise never hides a duplicate name or blocks a tidy-whitespace fix.
export function normalizeText(text) {
  return text ? text.replace(/\s+/g, ' ').trim() : ''
}
