// Every input for an offer, oldest first.
export function forOffer(offerId) {
  return this.findAll({
    where: { offer_id: offerId }, order: [['created_at']]
  })
}
