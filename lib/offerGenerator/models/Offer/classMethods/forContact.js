// Every offer a contact owns, newest first.
export function forContact(contactId) {
  return this.findAll({
    where: { contact_id: contactId }, order: [['created_at', 'DESC']]
  })
}
