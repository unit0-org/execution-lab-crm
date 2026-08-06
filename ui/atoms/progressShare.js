// How much of the work is done, 0–1 — or null when there is no count to
// go by, which is what puts the bar in its indeterminate sweep.
export function progressShare(value, total) {
  if (!total || value == null) return null

  return Math.min(Math.max(value / total, 0), 1)
}
