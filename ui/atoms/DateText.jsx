// The business runs on Pacific wall-clock (override with BUSINESS_TIMEZONE).
const ZONE = process.env.BUSINESS_TIMEZONE || 'America/Vancouver'

const DATE_ONLY = {
  year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC'
}

const DATE_TIME = {
  year: 'numeric', month: 'short', day: 'numeric',
  hour: 'numeric', minute: '2-digit', timeZone: ZONE
}

const format = (value, withTime) => {
  if (!value) return '—'

  const opts = withTime ? DATE_TIME : DATE_ONLY

  return new Date(value).toLocaleString('en-US', opts)
}

/**
 * Display-only date. A date-only value renders UTC-safe (so it never drifts a
 * day in the viewer's timezone); `withTime` adds the time in the business
 * timezone, so a timestamp shows the real Pacific wall-clock, not UTC.
 */
export function DateText({ value, withTime }) {
  return <>{format(value, withTime)}</>
}
