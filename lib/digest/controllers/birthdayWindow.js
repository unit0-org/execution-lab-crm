import { todayIso } from '@/lib/portal/todayIso'

const DAY = 86400000

const monthDayAt = (base, offset) => {
  const date = new Date(base + offset * DAY)

  return { month: date.getUTCMonth() + 1, day: date.getUTCDate() }
}

// The {month, day} pairs for today and the next 6 days (business tz),
// wrapping cleanly across month and year boundaries.
export function birthdayWindow() {
  const [y, m, d] = todayIso().split('-').map(Number)
  const base = Date.UTC(y, m - 1, d)

  return Array.from({ length: 7 }, (_, i) => monthDayAt(base, i))
}
