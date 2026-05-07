// Bucket open flags into Overdue / Today / This week / Later.
const today = () => new Date().toISOString().slice(0, 10)
const inDays = (n) => new Date(Date.now() + n * 86400_000).toISOString().slice(0, 10)

const bucket = (due) => {
  if (!due) return 'later'
  const t = today()
  if (due < t) return 'overdue'
  if (due === t) return 'today'
  if (due <= inDays(7)) return 'thisWeek'
  return 'later'
}

export function groupByDue(flags) {
  const groups = { overdue: [], today: [], thisWeek: [], later: [] }
  for (const f of flags) groups[bucket(f.due_date)].push(f)

  return groups
}
