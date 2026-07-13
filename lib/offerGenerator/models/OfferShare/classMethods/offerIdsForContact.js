// The ids of every offer shared with a contact, newest share first.
export function offerIdsForContact(contactId) {
  return this.findAll({
    where: { contact_id: contactId }, order: [['created_at', 'DESC']]
  }).then((rows) => rows.map((row) => row.offer_id))
}
