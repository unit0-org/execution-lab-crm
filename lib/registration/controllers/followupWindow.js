const DAY = 24 * 60 * 60 * 1000
const MAX_AGE = 14 * DAY

// The age range a pending registration must fall in to be chased: at least
// a day old (give them time to pay on their own) but not ancient.
export function followupWindow() {
  const now = Date.now()

  return { after: new Date(now - MAX_AGE), before: new Date(now - DAY) }
}
