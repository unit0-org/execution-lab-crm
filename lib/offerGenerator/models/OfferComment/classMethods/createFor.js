// Create a comment authored by a contact on an offer's thread.
export function createFor(offerId, authorId, body) {
  return this.create({
    offer_id: offerId, author_contact_id: authorId, body
  })
}
