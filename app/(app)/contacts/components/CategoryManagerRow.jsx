import { Inline } from '@/ui/layout/Inline'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { LeadToggle } from './LeadToggle'

export function CategoryManagerRow({ category, onLeads, onDelete }) {
  const flipLeads = () => onLeads(category.id, !category.include_in_leads)
  const del = () => onDelete(category.id)

  return (
    <Inline gap="sm">
      <span>{category.name}</span>
      <LeadToggle leads={category.include_in_leads} onToggle={flipLeads} />
      <IconButton tone="danger" label="Delete category" onClick={del}>
        <Icon name="trash" size={14} />
      </IconButton>
    </Inline>
  )
}
