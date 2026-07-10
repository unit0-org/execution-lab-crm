import { ago } from '@/lib/dashboard/controllers/ago'

const detail = (f) =>
  f.neverContacted ? 'never contacted' : `last activity ${ago(f.lastActivity)}`

const overflowRow = (n) => ({ primary: `+${n} more`, secondary: null })

const extraRows = (overflow) =>
  overflow ? [overflowRow(overflow)] : []

// The follow-ups section view: each contact with why they surfaced, plus a
// trailing "+N more" row when the list was capped.
export function followUpView({ items, overflow }) {
  const rows = items.map((f) => ({ primary: f.name, secondary: detail(f) }))

  return {
    title: 'Follow-ups',
    emptyText: 'No one is overdue for a follow-up. Nice.',
    rows: [...rows, ...extraRows(overflow)]
  }
}
