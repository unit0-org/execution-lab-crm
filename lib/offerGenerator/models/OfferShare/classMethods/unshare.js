// Stop sharing an offer with a contact.
export function unshare(offerId, contactId) {
  return this.destroy({
    where: { offer_id: offerId, contact_id: contactId }
  })
}
