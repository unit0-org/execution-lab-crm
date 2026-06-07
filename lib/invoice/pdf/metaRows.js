import { palette } from './palette'

const date = (value) => (value ? String(value).slice(0, 10) : '')

const row = (text, color, size, bold, gap) =>
  ({ text, color, size, bold, gap: gap || 17 })

// The right-column metadata rows for an invoice (skips empty dates).
export function metaRows(invoice) {
  const rows = [
    row(`# ${invoice.number}`, palette.ink, 13, true, 20),
    row(`Status: ${invoice.status}`, palette.muted, 10)
  ]

  if (invoice.issued_at)
    rows.push(row(`Issued: ${date(invoice.issued_at)}`, palette.muted, 10))

  if (invoice.due_at)
    rows.push(row(`Due: ${date(invoice.due_at)}`, palette.muted, 10))

  return rows
}
