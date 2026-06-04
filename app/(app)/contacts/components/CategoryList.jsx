import { CategoryRow } from './CategoryRow'

// The selectable category rows, each with a lead-inclusion toggle.
export function CategoryList({ categories, currentId, onAssign, onToggle }) {
  return categories.map((c) => (
    <CategoryRow
      key={c.id}
      label={c.name}
      active={c.id === currentId}
      leads={c.include_in_leads}
      onSelect={() => onAssign(c.id)}
      onToggleLeads={() => onToggle(c.id, !c.include_in_leads)}
    />
  ))
}
