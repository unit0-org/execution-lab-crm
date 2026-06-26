import { Stack } from '@/ui/layout/Stack'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { Text } from '@/ui/atoms/Text'

export function LeverOption({ name, desc }) {
  return (
    <Stack gap="xs">
      <MonoLabel tone="accent" size={11}>{name}</MonoLabel>
      <Text size="sm" tone="muted" gutter="none">{desc}</Text>
    </Stack>
  )
}
