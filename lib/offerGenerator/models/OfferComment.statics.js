// Helpers for OfferComment: create a comment, and delete one only when the
// caller authored it (author-scoped, so no one deletes another's comment).
export function addStatics(model) {
  model.createFor = function (offerId, authorId, body) {
    return this.create({
      offer_id: offerId, author_contact_id: authorId, body
    })
  }

  model.destroyOwned = function (contactId, id) {
    return this.destroy({ where: { id, author_contact_id: contactId } })
  }
}
