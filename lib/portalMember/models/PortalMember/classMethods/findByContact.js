// Find the portal member for a given contact id.
export function findByContact(contactId) {
  return this.findOne({ where: { contact_id: contactId } })
}
