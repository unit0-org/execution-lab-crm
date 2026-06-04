const DAY = 86400000

// A relative day count like "today" / "1d ago" / "12d ago".
export function ago(date) {
  const days = Math.floor((Date.now() - new Date(date)) / DAY)

  if (days <= 0) return 'today'

  if (days === 1) return '1d ago'

  return `${days}d ago`
}
