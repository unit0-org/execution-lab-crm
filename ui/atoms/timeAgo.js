const MIN = 60000
const STEPS = [
  ['day', 1440 * MIN],
  ['hour', 60 * MIN],
  ['minute', MIN]
]

// Human "x minutes ago" for a timestamp; display-only.
export function timeAgo(value) {
  if (!value) return 'never'

  const diff = Date.now() - new Date(value).getTime()

  for (const [unit, ms] of STEPS) {
    const n = Math.floor(diff / ms)

    if (n >= 1) return `${n} ${unit}${n === 1 ? '' : 's'} ago`
  }

  return 'just now'
}
