const DAY = 86400000

// Weekday index (0=Sun … 6=Sat) for a YYYY-MM-DD business-tz date. Parsing
// the calendar date as UTC midnight keeps the day-of-week server-tz safe.
export function weekdayOf(iso) {
  return new Date(`${iso}T00:00:00Z`).getUTCDay()
}

// The Monday (YYYY-MM-DD) of the week containing the given business-tz date.
export function weekStartIso(iso) {
  const base = new Date(`${iso}T00:00:00Z`)
  const sinceMonday = (base.getUTCDay() + 6) % 7
  const monday = new Date(base.getTime() - sinceMonday * DAY)

  return monday.toISOString().slice(0, 10)
}
