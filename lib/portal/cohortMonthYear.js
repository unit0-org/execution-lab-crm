// A cohort start date split for display: month name, year, and a short
// start label. UTC-safe so a DATEONLY never drifts a day.
export function cohortMonthYear(startDate) {
  if (!startDate) return { month: 'TBD', year: '', startLabel: 'Dates TBD' }

  const date = new Date(`${startDate}T00:00:00Z`)
  const part = (opts) =>
    date.toLocaleDateString('en-CA', { timeZone: 'UTC', ...opts })

  return {
    month: part({ month: 'long' }),
    year: part({ year: 'numeric' }),
    startLabel: part({ month: 'short', day: 'numeric', year: 'numeric' })
  }
}
