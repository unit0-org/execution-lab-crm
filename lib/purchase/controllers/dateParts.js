const pad = (n) => String(n).padStart(2, '0')

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export const isoDate = (d) =>
  `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`

export const ym = (d) => isoDate(d).slice(0, 7)

export const monthName = (d) => MONTHS[d.getUTCMonth()]

export const dayLabel = (d) => `${monthName(d)} ${d.getUTCDate()}`

export const quarterOf = (d) => Math.floor(d.getUTCMonth() / 3) + 1

// The Monday that starts the ISO week containing `d` (UTC).
export const weekStart = (d) => {
  const offset = (d.getUTCDay() + 6) % 7
  const ms = Date.UTC(d.getUTCFullYear(), d.getUTCMonth(),
    d.getUTCDate() - offset)

  return new Date(ms)
}
