import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { Heading } from '@/ui/atoms/Heading'

export function StatCard({ label, value }) {
  return (
    <Stack gap="xs">
      <Heading level={2} gutter="none">{value}</Heading>
      <Text size="sm" tone="muted">{label}</Text>
    </Stack>
  )
}
