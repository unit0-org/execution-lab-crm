const fullName = (c) =>
  [c.first_name, c.last_name].filter(Boolean).join(' ')

const firstEmail = (c) => c.contact_email?.[0]?.email || ''

const toLabel = (c) =>
  [fullName(c), firstEmail(c)].filter(Boolean).join(' · ')

// Contacts reachable by email, as combobox options for the invite picker.
export function toContactOptions(rows) {
  return rows
    .filter((c) => firstEmail(c))
    .map((c) => ({ value: c.id, label: toLabel(c) }))
}

// The first few options whose label matches the query (case-insensitive).
export function matchContactOptions(all, query) {
  const q = query.trim().toLowerCase()

  if (!q) return []

  return all.filter((o) => o.label.toLowerCase().includes(q)).slice(0, 6)
}
