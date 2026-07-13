// Delete one of a contact's offers (its inputs cascade).
export function remove(contactId, id) {
  return this.destroy({ where: { contact_id: contactId, id } })
}
