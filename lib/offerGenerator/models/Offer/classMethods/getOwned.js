// One offer a contact owns (or null) — the ownership gate for edits.
export function getOwned(contactId, id) {
  return this.findOne({ where: { contact_id: contactId, id } })
}
