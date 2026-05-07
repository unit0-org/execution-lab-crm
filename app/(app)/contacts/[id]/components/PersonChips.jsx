import { Inline } from '@/ui/Inline'
import { Chip } from '@/ui/Chip'

export function PersonChips({ types = [], labels = [] }) {
  if (!types.length && !labels.length) return null

  return (
    <Inline gap="sm">
      {types.map((t) => <Chip key={`t-${t.id}`} color={t.color}>{t.name}</Chip>)}
      {labels.map((l) => <Chip key={`l-${l.id}`} color={l.color}>{l.name}</Chip>)}
    </Inline>
  )
}
