import { Inline } from '../layout/Inline'
import { Button } from '../atoms/Button'
import { Text } from '../atoms/Text'

export function ConfirmBulkDelete({ count, onDelete, onCancel }) {
  return (
    <Inline gap="sm">
      <Text size="sm">Delete {count}?</Text>
      <Button tone="danger" size="sm" onClick={onDelete}>Delete</Button>
      <Button size="sm" onClick={onCancel}>Cancel</Button>
    </Inline>
  )
}
