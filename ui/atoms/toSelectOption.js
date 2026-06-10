// Normalize a select option to { value, label }. Accepts a bare string
// (value === label) or an object with explicit value/label.
export function toSelectOption(option) {
  if (typeof option === 'string') {
    return { value: option, label: option }
  }

  return { value: option.value, label: option.label }
}
