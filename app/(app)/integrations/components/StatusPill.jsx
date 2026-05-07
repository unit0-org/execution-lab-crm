import { Badge } from '@/ui/Badge'

const TONE = { connected: 'success', available: 'neutral' }

export function StatusPill({ status }) {
  return <Badge tone={TONE[status]}>{status}</Badge>
}
