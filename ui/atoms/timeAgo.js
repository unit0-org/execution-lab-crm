const MIN = 60000
const DAY = 1440 * MIN
const STEPS = [
  ['year', 365 * DAY],
  ['month', 30 * DAY],
  ['day', DAY],
  ['hour', 60 * MIN],
  ['minute', MIN]
]

// Human "x minutes ago" for a timestamp; display-only. Rolls up past a month
// so an old note reads "14 months ago", never "425 days ago".
export function timeAgo(value) {
  if (!value) return 'never'

  const diff = Date.now() - new Date(value).getTime()

  for (const [unit, ms] of STEPS) {
    const n = Math.floor(diff / ms)

    if (n >= 1) return `${n} ${unit}${n === 1 ? '' : 's'} ago`
  }

  return 'just now'
}
