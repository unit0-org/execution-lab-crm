import { Badge } from '@/ui/Badge'
import { Text } from '@/ui/Text'

const TONE  = { null: 'neutral', true: 'success', false: 'error' }
const LABEL = { null: 'checking…', true: 'connected', false: 'unreachable' }

export function SupabaseStatusBadge({ status }) {
  return (
    <>
      <Badge tone={TONE[status.ok]}>{LABEL[status.ok]}</Badge>
      <Text tone="muted" size="sm">{status.detail}</Text>
    </>
  )
}
