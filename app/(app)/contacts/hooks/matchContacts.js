const fullName = (c) =>
  [c.first_name, c.last_name].filter(Boolean).join(' ')

const firstEmail = (c) =>
  (c.contact_email && c.contact_email[0] &&
    c.contact_email[0].email) || ''

const toOption = (c) => ({
  value: c.id,
  label: fullName(c),
  email: firstEmail(c)
})

const matches = (query) => (option) =>
  option.label.toLowerCase().includes(query.toLowerCase())

// Contact rows → combobox options filtered by the typed query.
export function matchContacts(contacts, query) {
  return contacts.map(toOption).filter(matches(query || ''))
}
