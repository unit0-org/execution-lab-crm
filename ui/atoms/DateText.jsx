const OPTS = { year: 'numeric', month: 'short', day: 'numeric' }

const format = (value) =>
  value ? new Date(value).toLocaleDateString('en-US', OPTS) : '—'

// Renders a date string (or an em dash when missing). Display-only.
export function DateText({ value }) {
  return <>{format(value)}</>
}
