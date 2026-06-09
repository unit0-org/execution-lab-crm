import { Badge } from '@/ui/atoms/Badge'

// A founder invite's state as a badge.
export function InviteStatus({ invite }) {
  if (invite.accepted_at) return <Badge tone="neutral">Accepted</Badge>

  return <Badge tone="accent">Pending</Badge>
}
