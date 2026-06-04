import { Inline } from '@/ui/layout/Inline'
import { Text } from '@/ui/atoms/Text'
import { Chip } from '@/ui/molecules/Chip'

// A segment's members as clickable chips, or a muted note when empty.
export function SegmentMembers({ items }) {
  if (!items.length) return <Text tone="muted" size="sm">None</Text>

  return (
    <Inline gap="sm">
      {items.map((m) => (
        <Chip key={m.id} href={`/contacts/${m.id}`}>{m.name}</Chip>
      ))}
    </Inline>
  )
}
