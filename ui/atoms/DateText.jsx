const OPTS = {
  year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC'
}

const TIME = { hour: 'numeric', minute: '2-digit' }

const format = (value, withTime) => {
  if (!value) return '—'

  const opts = withTime ? { ...OPTS, ...TIME } : OPTS

  return new Date(value).toLocaleString('en-US', opts)
}

// Renders a calendar date (formatted in UTC so a date-only value never
// drifts a day in the viewer's timezone). Pass withTime to add the time.
// Display-only.
export function DateText({ value, withTime }) {
  return <>{format(value, withTime)}</>
}
