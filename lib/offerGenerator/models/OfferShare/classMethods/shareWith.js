// Share an offer with a contact (idempotent via the unique key).
export function shareWith(offerId, contactId) {
  return this.findOrCreate({
    where: { offer_id: offerId, contact_id: contactId }
  })
}
