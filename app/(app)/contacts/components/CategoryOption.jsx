import { Inline } from '@/ui/layout/Inline'
import { Checkbox } from '@/ui/atoms/Checkbox'
import { LeadToggle } from './LeadToggle'

// One category in the picker: a checkbox for membership + a lead toggle.
export function CategoryOption({ category, checked, onToggle, onLeads }) {
  const flip = () => onToggle(category.id)
  const flipLeads = () => onLeads(category.id, !category.include_in_leads)

  return (
    <Inline gap="sm">
      <Checkbox checked={checked} onChange={flip} label={category.name} />
      <span>{category.name}</span>
      <LeadToggle leads={category.include_in_leads} onToggle={flipLeads} />
    </Inline>
  )
}
