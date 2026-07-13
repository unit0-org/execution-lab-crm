// Rename one of a contact's offers, marking it edited.
export function rename(contactId, id, name) {
  return this.update(
    { name, updated_at: new Date() },
    { where: { contact_id: contactId, id } }
  )
}
