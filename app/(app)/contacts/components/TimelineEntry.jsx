import { Inline } from '@/ui/layout/Inline'
import { Text } from '@/ui/atoms/Text'
import { DateText } from '@/ui/atoms/DateText'
import { Badge } from '@/ui/atoms/Badge'
import { Link } from '@/ui/atoms/Link'

export function TimelineEntry({ entry }) {
  return (
    <Inline gap="sm">
      <Text tone="muted" size="sm"><DateText value={entry.date} /></Text>
      <Badge tone={entry.statusTone}>{entry.status}</Badge>
      <Text size="sm"><Link href={entry.href}>{entry.title}</Link></Text>
    </Inline>
  )
}
