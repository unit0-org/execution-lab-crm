const fullName = (c) =>
  [c.first_name, c.last_name].filter(Boolean).join(' ')

const firstEmail = (c) =>
  (c.contact_email && c.contact_email[0] &&
    c.contact_email[0].email) || ''

// Contact rows → autocomplete options ({ value, label, email }).
export function toContactOptions(contacts) {
  return contacts.map((c) => ({
    value: c.id,
    label: fullName(c),
    email: firstEmail(c)
  }))
}
