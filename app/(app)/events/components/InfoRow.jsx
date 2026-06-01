import { Inline } from '@/ui/layout/Inline'
import { Text } from '@/ui/atoms/Text'

export function InfoRow({ label, children }) {
  return (
    <Inline gap="sm">
      <Text size="sm" tone="muted">{label}</Text>
      <Text size="sm">{children}</Text>
    </Inline>
  )
}
