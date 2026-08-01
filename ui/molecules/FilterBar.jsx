import { filterBarStyle } from './FilterBar.styles'
import { FilterChip } from './FilterChip'
import { buildFilterChips } from './buildFilterChips'

/**
 * URL-driven filter chips; the active one is highlighted. Fixed height,
 * so switching filters never shifts the list below it. Pass `keep` — the
 * page's other query params — when a page carries more than one bar, so
 * picking a chip here preserves the other bar's selection.
 */
export function FilterBar({ options, active, basePath, param, keep }) {
  const chips = buildFilterChips(options, basePath, param, active, keep)

  return (
    <div style={filterBarStyle}>
      {chips.map((chip) => (
        <FilterChip key={chip.key} href={chip.href} label={chip.label}
          active={chip.active} />
      ))}
    </div>
  )
}
