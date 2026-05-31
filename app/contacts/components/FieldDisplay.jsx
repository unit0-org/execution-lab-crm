import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { EditableText } from '@/ui/atoms/EditableText'

export function FieldDisplay({ label, value, onEdit }) {
  const shown = value || 'Add…'

  return (
    <Stack gap="xs">
      <Text size="sm" tone="muted">{label}</Text>
      <EditableText value={shown} onClick={onEdit} />
    </Stack>
  )
}
