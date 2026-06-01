const OPTS = {
  year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC'
}

const format = (value) =>
  value ? new Date(value).toLocaleDateString('en-US', OPTS) : '—'

// Renders a calendar date (formatted in UTC so a date-only value never
// drifts a day in the viewer's timezone). Display-only.
export function DateText({ value }) {
  return <>{format(value)}</>
}
