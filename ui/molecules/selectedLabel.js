// The selected option labels joined, or the placeholder when none.
export function selectedLabel(options, selected, placeholder) {
  const names = options
    .filter((o) => selected.includes(o.value))
    .map((o) => o.label)

  return names.length ? names.join(', ') : placeholder
}
