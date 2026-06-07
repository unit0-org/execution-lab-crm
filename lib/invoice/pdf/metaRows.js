import { palette } from './palette'
import { formatDate } from './formatDate'

const row = (text, color, size, bold, gap) =>
  ({ text, color, size, bold, gap: gap || 17 })

const dateRow = (label, value) =>
  row(`${label}: ${formatDate(value)}`, palette.muted, 10)

// The right-column metadata rows for an invoice (skips empty dates).
export function metaRows(invoice) {
  const rows = [row(`# ${invoice.number}`, palette.ink, 13, true, 20)]

  if (invoice.issued_at)
    rows.push(dateRow('Issued', invoice.issued_at))

  if (invoice.due_at)
    rows.push(dateRow('Due', invoice.due_at))

  return rows
}
