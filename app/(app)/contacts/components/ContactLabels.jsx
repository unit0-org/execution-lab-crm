import { Inline } from '@/ui/layout/Inline'
import { LabelBadge } from '@/ui/atoms/LabelBadge'

// The contact's labels as colored pills; renders nothing when it has none.
export function ContactLabels({ contact }) {
  const labels = contact.categories || []

  if (labels.length === 0) return null

  return (
    <Inline gap="sm">
      {labels.map((c) => (
        <LabelBadge key={c.id} name={c.name} color={c.color} />
      ))}
    </Inline>
  )
}
