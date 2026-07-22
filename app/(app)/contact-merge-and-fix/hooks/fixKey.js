// Stable key for a fix suggestion: its type plus the target row id.
export function fixKey(fix) {
  return `${fix.type}:${fix.id}`
}
