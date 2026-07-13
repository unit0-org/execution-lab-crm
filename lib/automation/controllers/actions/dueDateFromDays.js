// A due date N days out, or null when no offset is configured.
export function dueDateFromDays(days) {
  const n = Number(days)

  if (!n) return null

  return new Date(Date.now() + n * 86400000)
}
