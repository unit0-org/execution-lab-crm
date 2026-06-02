import { Inline } from '@/ui/layout/Inline'
import { Button } from '@/ui/atoms/Button'
import { Text } from '@/ui/atoms/Text'

export function ConfirmBulkDelete({ count, onDelete, onCancel }) {
  return (
    <Inline gap="sm">
      <Text size="sm">Delete {count}?</Text>
      <Button tone="danger" size="sm" onClick={onDelete}>Delete</Button>
      <Button size="sm" onClick={onCancel}>Cancel</Button>
    </Inline>
  )
}
