import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { FieldLabel } from './FieldLabel'

export function DetailRow({ label, children }) {
  return (
    <Stack gap="xs">
      <FieldLabel label={label} />
      <Text size="sm" gutter="none">{children}</Text>
    </Stack>
  )
}
