// A context field's prompt value: a joined list for a repeatable field,
// else its single value. Repeatable entries render semicolon-separated.
export function fieldValue(field, values, lists) {
  if (!field.repeatable) return (values[field.inputType] || '').trim()

  return (lists[field.inputType] || [])
    .map((row) => row.value.trim())
    .filter(Boolean)
    .join('; ')
}
