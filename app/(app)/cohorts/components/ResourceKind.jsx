import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { ResourceRow } from './ResourceRow'

export function ResourceKind({ title, items, onChanged }) {
  if (!items.length) return null

  return (
    <Stack gap="xs">
      <Text size="sm">{title}</Text>
      {items.map((item) => (
        <ResourceRow key={item.id} item={item} onChanged={onChanged} />
      ))}
    </Stack>
  )
}
