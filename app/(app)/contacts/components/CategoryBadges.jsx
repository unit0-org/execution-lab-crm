import { Inline } from '@/ui/layout/Inline'
import { Badge } from '@/ui/atoms/Badge'

// Every category a contact is in, or the default "Lead" when it has none.
export function CategoryBadges({ categories }) {
  if (!categories.length) return <Badge tone="neutral">Lead</Badge>

  return (
    <Inline gap="sm">
      {categories.map((c) => (
        <Badge key={c.id} tone="neutral">{c.name}</Badge>
      ))}
    </Inline>
  )
}
