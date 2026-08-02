import { chipHref } from './chipHref'

// The bar's built-in "All" reset: selected when no value is active, and
// carrying no param of its own. Omitted when the caller lists every
// choice explicitly (`reset={false}`) — needed when "no param" already
// means a default other than "everything".
function resetChip(basePath, param, active, keep) {
  return {
    key: 'all',
    label: 'All',
    href: chipHref(basePath, keep),
    active: !active
  }
}

// Build the chip list for a filter bar: the "All" reset (unless opted
// out) followed by each option, each carrying the href that selects it
// and whether it is the currently active chip. `keep` carries any other
// query params through, so two bars on one page don't clear each other.
export function buildFilterChips(opts) {
  const { options, basePath, param, active, keep, reset = true } = opts
  const rest = options.map((option) => ({
    key: option.value,
    label: option.label,
    href: chipHref(basePath, keep, param, option.value),
    active: option.value === active
  }))

  if (!reset) return rest

  return [resetChip(basePath, param, active, keep), ...rest]
}
