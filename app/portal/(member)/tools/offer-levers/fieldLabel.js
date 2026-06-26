// "Seed — your offer in one line": a context field's label with its hint.
export function fieldLabel(field) {
  if (!field.hint) return field.label

  return `${field.label} — ${field.hint}`
}
