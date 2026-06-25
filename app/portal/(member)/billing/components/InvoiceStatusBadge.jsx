import { Badge } from '@/ui/atoms/Badge'

const PENDING = { label: 'Payment pending', tone: 'accent' }

// A member-facing invoice status pill in the member's own language: a paid
// invoice reads "Paid"; anything not yet paid (approved or sent) reads
// "Payment pending".
const BADGES = {
  paid: { label: 'Paid', tone: 'success' },
  approved: PENDING,
  sent: PENDING
}

export function InvoiceStatusBadge({ status }) {
  const badge = BADGES[status] || PENDING

  return <Badge tone={badge.tone}>{badge.label}</Badge>
}
