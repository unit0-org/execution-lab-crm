const fullName = (c) =>
  [c.first_name, c.last_name].filter(Boolean).join(' ')

const firstEmail = (c) => c.contact_email?.[0]?.email || ''

const toLabel = (c) =>
  [fullName(c), firstEmail(c)].filter(Boolean).join(' · ')

// Map contact rows to combobox options; only those reachable by email.
export function toContactOptions(rows) {
  return rows
    .filter((c) => firstEmail(c))
    .map((c) => ({ value: c.id, label: toLabel(c), email: firstEmail(c) }))
}
