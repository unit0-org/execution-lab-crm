import { Inline } from '@/ui/layout/Inline'
import { Text } from '@/ui/atoms/Text'
import { DateText } from '@/ui/atoms/DateText'
import { Badge } from '@/ui/atoms/Badge'

export function TimelineEntry({ entry }) {
  return (
    <Inline gap="sm">
      <Badge>{entry.status}</Badge>
      <Text size="sm">{entry.title}</Text>
      <Text tone="muted" size="sm"><DateText value={entry.date} /></Text>
    </Inline>
  )
}
