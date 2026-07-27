const FORMAT = {
  weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'
}

// A full "Monday, March 23, 2026" from a YYYY-MM-DD date. UTC-safe so a
// DATEONLY never drifts a day — and the weekday is worth saying out loud
// when the date is the day money leaves someone's card.
export function longDateLabel(iso) {
  return new Date(`${iso}T00:00:00Z`)
    .toLocaleDateString('en-CA', { timeZone: 'UTC', ...FORMAT })
}
