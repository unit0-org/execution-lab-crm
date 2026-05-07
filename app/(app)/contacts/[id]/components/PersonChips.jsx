import { Inline } from '@/ui/Inline'
import { Chip } from '@/ui/Chip'

export function PersonChips({ labels = [] }) {
  if (!labels.length) return null

  return (
    <Inline gap="sm">
      {labels.map((l) => <Chip key={`l-${l.id}`} color={l.color}>{l.name}</Chip>)}
    </Inline>
  )
}
