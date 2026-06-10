import { Inline } from '@/ui/layout/Inline'
import { Text } from '@/ui/atoms/Text'
import { Badge } from '@/ui/atoms/Badge'
import { DateText } from '@/ui/atoms/DateText'

// Early-bird pill + deadline; renders nothing outside the early window.
export function EarlyBirdBadge({ pricing }) {
  if (!pricing.earlyBird) return null

  return (
    <Inline gap="sm">
      <Badge tone="success">Early bird</Badge>
      <Text tone="muted" size="sm">
        until <DateText value={pricing.earlyBirdDeadline} />
      </Text>
    </Inline>
  )
}
