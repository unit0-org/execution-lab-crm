// Every grant row for a set of contacts.
export function rowsForContacts(contactIds) {
  return this.findAll({ where: { contact_id: contactIds } })
}
