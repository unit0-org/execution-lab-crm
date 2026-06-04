// Build the chip list for a filter bar: an "All" reset followed by
// each option, each carrying the href that selects it and whether
// it is the currently active chip.
export function buildFilterChips(options, basePath, param, active) {
  const all = { key: 'all', label: 'All', href: basePath, active: !active }
  const rest = options.map((option) => ({
    key: option.value,
    label: option.label,
    href: `${basePath}?${param}=${option.value}`,
    active: option.value === active
  }))

  return [all, ...rest]
}
