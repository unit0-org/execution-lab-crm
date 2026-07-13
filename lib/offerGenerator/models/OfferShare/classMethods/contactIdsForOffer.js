// The ids of every contact an offer is shared with.
export function contactIdsForOffer(offerId) {
  return this.findAll({ where: { offer_id: offerId } })
    .then((rows) => rows.map((row) => row.contact_id))
}
