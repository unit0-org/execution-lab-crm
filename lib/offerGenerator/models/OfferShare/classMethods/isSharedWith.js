// Whether an offer is shared with a contact.
export function isSharedWith(offerId, contactId) {
  return this.count({
    where: { offer_id: offerId, contact_id: contactId }
  }).then((n) => n > 0)
}
