// Create a new offer for a contact.
export function createFor(contactId, name) {
  return this.create({ contact_id: contactId, name })
}
