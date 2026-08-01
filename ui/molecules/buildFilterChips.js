import { chipHref } from './chipHref'

// Build the chip list for a filter bar: an "All" reset followed by
// each option, each carrying the href that selects it and whether
// it is the currently active chip. `keep` carries any other query
// params through, so two bars on one page don't clear each other.
export function buildFilterChips(options, basePath, param, active, keep) {
  const all = {
    key: 'all',
    label: 'All',
    href: chipHref(basePath, keep),
    active: !active
  }
  const rest = options.map((option) => ({
    key: option.value,
    label: option.label,
    href: chipHref(basePath, keep, param, option.value),
    active: option.value === active
  }))

  return [all, ...rest]
}
