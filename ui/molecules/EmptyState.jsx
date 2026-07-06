import { Stack } from '@/ui/layout/Stack'
import { Display } from '@/ui/atoms/Display'
import { Text } from '@/ui/atoms/Text'

export function EmptyState({ title, message }) {
  return (
    <Stack gap="md">
      <Display size="sm">{title}</Display>
      <Text size="sm">{message}</Text>
    </Stack>
  )
}
