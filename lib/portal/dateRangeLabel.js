// A compact "Jun 7 – Jun 12, 2026" range from two YYYY-MM-DD dates, with
// the year shown once at the end. UTC-safe so a DATEONLY never drifts a day.
export function dateRangeLabel(fromIso, toIso) {
  const part = (iso, opts) =>
    new Date(`${iso}T00:00:00Z`)
      .toLocaleDateString('en-CA', { timeZone: 'UTC', ...opts })
  const day = { month: 'short', day: 'numeric' }
  const from = part(fromIso, day)
  const to = part(toIso, day)

  return `${from} – ${to}, ${part(toIso, { year: 'numeric' })}`
}
