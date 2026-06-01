import { Inline } from '@/ui/layout/Inline'
import { Text } from '@/ui/atoms/Text'

export function SummaryLine({ label, value }) {
  return (
    <Inline gap="sm">
      <Text tone="muted" size="sm">{label}</Text>
      <Text size="sm">{value}</Text>
    </Inline>
  )
}
