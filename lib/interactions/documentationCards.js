// Derive the "Document this meeting" cards from `interactions`.
// No persistence: classification + thresholds are computed on read.

const TWO_HOURS_MS = 2 * 60 * 60 * 1000
const ONE_DAY_MS   = 24 * 60 * 60 * 1000
const SEVEN_DAYS_MS = 7 * ONE_DAY_MS

const isVisible = (row, now) => {
  const endedMs = new Date(row.ended_at || row.started_at).getTime()
  if (now - endedMs < TWO_HOURS_MS) return false
  if (now - endedMs > SEVEN_DAYS_MS) return false
  if (row.documentation_status === 'dismissed' || row.documentation_status === 'missed') return false
  if (row.documentation_status === 'snoozed' && new Date(row.documentation_snoozed_until) > new Date(now)) return false

  return true
}

const priorityFor = (row, now) =>
  now - new Date(row.ended_at || row.started_at).getTime() > ONE_DAY_MS ? 'high' : 'normal'

export function deriveDocumentationCards(rows, now = Date.now()) {
  return rows
    .filter((r) => r.classification === 'in_person' && r.qualifies && !r.user_notes)
    .filter((r) => isVisible(r, now))
    .map((r) => ({ ...r, priority: priorityFor(r, now) }))
}
