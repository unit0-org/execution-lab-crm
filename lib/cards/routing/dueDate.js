// Map a fuzzy time hint or a suggested-window to an ISO due date.
const DAY = 86400000

const friday = () => {
  const d = new Date()
  d.setDate(d.getDate() + ((5 - d.getDay() + 7) % 7 || 7))

  return d.toISOString()
}

const inDays = (n) => new Date(Date.now() + n * DAY).toISOString()

const HINT_MAP = new Map([
  ['this week', friday], ['by friday', friday], ['friday', friday],
  ['next week', () => inDays(7)],  ['monday', () => inDays(7)],
  ['two weeks', () => inDays(14)], ['next two weeks', () => inDays(14)],
  ['month', () => inDays(30)],     ['next month', () => inDays(30)],
])

export function dueFromHint(hint) {
  if (!hint) return null
  const fn = HINT_MAP.get(hint.toLowerCase().trim())

  return fn ? fn() : null
}
