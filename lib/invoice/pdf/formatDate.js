const MONTHS =
  ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// Format a date value as "Jun 7, 2026" (UTC, year included).
export function formatDate(value) {
  if (!value) return ''

  const d = new Date(value)

  return `${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`
}
