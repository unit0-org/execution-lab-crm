import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { RelationshipRow } from './RelationshipRow'

export function RelationshipList({ items, onChanged }) {
  if (!items.length) return <Text tone="muted">No relationships yet.</Text>

  return (
    <Stack gap="xs">
      {items.map((rel) => (
        <RelationshipRow key={rel.id} rel={rel} onChanged={onChanged} />
      ))}
    </Stack>
  )
}
