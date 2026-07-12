// Helpers for OfferShare: share/unshare an offer with a contact, and read
// who an offer is shared with / which offers are shared with a contact.
// Controllers verify offer ownership before calling the mutating ones.
const at = (offerId, contactId) =>
  ({ offer_id: offerId, contact_id: contactId })
const pluck = (rows, key) => rows.map((row) => row[key])

export function addStatics(model) {
  model.shareWith = (offerId, contactId) =>
    model.findOrCreate({ where: at(offerId, contactId) })

  model.unshare = (offerId, contactId) =>
    model.destroy({ where: at(offerId, contactId) })

  model.isSharedWith = (offerId, contactId) =>
    model.count({ where: at(offerId, contactId) }).then((n) => n > 0)

  model.contactIdsForOffer = (offerId) =>
    model.findAll({ where: { offer_id: offerId } })
      .then((rows) => pluck(rows, 'contact_id'))

  model.offerIdsForContact = (contactId) =>
    model.findAll({
      where: { contact_id: contactId }, order: [['created_at', 'DESC']]
    }).then((rows) => pluck(rows, 'offer_id'))
}
