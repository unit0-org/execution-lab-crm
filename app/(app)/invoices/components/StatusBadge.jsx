import { Badge } from '@/ui/atoms/Badge'

const TONES = {
  draft: 'neutral',
  approved: 'accent',
  sent: 'accent',
  paid: 'success',
  void: 'error'
}

export function StatusBadge({ status }) {
  const tone = TONES[status] || 'neutral'

  return <Badge tone={tone}>{status}</Badge>
}
