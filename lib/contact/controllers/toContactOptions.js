const fullName = (c) =>
  [c.first_name, c.last_name].filter(Boolean).join(' ')

const firstEmail = (c) => c.contact_email?.[0]?.email || ''

const toLabel = (c) =>
  [fullName(c), firstEmail(c)].filter(Boolean).join(' · ')

// Contacts reachable by email, as picker options. Each carries its name
// and email beside the label, so a picker can prefill a form from the
// choice rather than only recording which contact was chosen.
export function toContactOptions(rows) {
  return rows
    .filter((c) => firstEmail(c))
    .map((c) => ({
      value: c.id,
      label: toLabel(c),
      name: fullName(c),
      email: firstEmail(c)
    }))
}
