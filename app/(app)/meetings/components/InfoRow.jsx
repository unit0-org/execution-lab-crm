import { Inline } from '@/ui/layout/Inline'
import { Text } from '@/ui/atoms/Text'

export function InfoRow({ label, children }) {
  return (
    <Inline gap="sm">
      <Text tone="muted" size="sm">{label}</Text>
      <Text size="sm">{children}</Text>
    </Inline>
  )
}
