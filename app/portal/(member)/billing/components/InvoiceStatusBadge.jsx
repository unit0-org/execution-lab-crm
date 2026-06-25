import { Badge } from '@/ui/atoms/Badge'

const TONES = { approved: 'accent', sent: 'accent', paid: 'success' }

// A member-facing invoice status pill. Only approved/sent/paid invoices
// reach the portal, so anything else falls back to a neutral tone.
export function InvoiceStatusBadge({ status }) {
  const tone = TONES[status] || 'neutral'

  return <Badge tone={tone}>{status}</Badge>
}
