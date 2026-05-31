import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { TextButton } from '@/ui/atoms/TextButton'

export function FieldDisplay({ label, value, onEdit }) {
  const shown = value || 'Add…'

  return (
    <Stack gap="xs">
      <Text size="sm" tone="muted">{label}</Text>
      <TextButton type="button" onClick={onEdit}>{shown}</TextButton>
    </Stack>
  )
}
