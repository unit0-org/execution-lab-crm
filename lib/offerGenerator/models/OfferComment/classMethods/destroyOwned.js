// Delete a comment only when the caller authored it (author-scoped, so no
// one deletes another's comment).
export function destroyOwned(contactId, id) {
  return this.destroy({ where: { id, author_contact_id: contactId } })
}
