import { Stack } from '@/ui/layout/Stack'
import { EditableText } from '@/ui/atoms/EditableText'
import { FieldLabel } from './FieldLabel'

export function FieldDisplay({ label, value, onEdit }) {
  const shown = value || 'Add…'

  return (
    <Stack gap="xs">
      <FieldLabel label={label} />
      <EditableText value={shown} onClick={onEdit} />
    </Stack>
  )
}
