import { Badge } from '@/ui/atoms/Badge'

const TONES = { invited: 'accent', active: 'success', revoked: 'neutral' }
const LABELS = { invited: 'Invited', active: 'Member', revoked: 'Revoked' }

// The contact's portal access status, or nothing when never invited.
export function PortalStatusBadge({ status }) {
  if (!status) return null

  return <Badge tone={TONES[status]}>{LABELS[status]}</Badge>
}
