const normalize = (title) => (title || '').trim().toLowerCase()

const toMinute = (value) =>
  value ? new Date(value).toISOString().slice(0, 16) : null

// Two meetings share a title (case/space-insensitive).
export const sameTitle = (a, b) =>
  Boolean(normalize(a)) && normalize(a) === normalize(b)

// Two meetings start in the same minute.
export const sameMinute = (a, b) =>
  Boolean(toMinute(a)) && toMinute(a) === toMinute(b)

// Two starts fall within `minutes` of each other.
export const withinMinutes = (a, b, minutes) => {
  if (!a || !b) return false

  const gap = Math.abs(new Date(a).getTime() - new Date(b).getTime())

  return gap <= minutes * 60 * 1000
}
