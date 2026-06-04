import { filterBarStyle } from './FilterBar.styles'
import { FilterChip } from './FilterChip'
import { buildFilterChips } from './buildFilterChips'

// A row of selectable filter chips; the active one is highlighted.
// Fixed height so switching filters never shifts the list below it.
export function FilterBar({ options, active, basePath, param }) {
  const chips = buildFilterChips(options, basePath, param, active)

  return (
    <div style={filterBarStyle}>
      {chips.map((chip) => (
        <FilterChip key={chip.key} href={chip.href} label={chip.label}
          active={chip.active} />
      ))}
    </div>
  )
}
