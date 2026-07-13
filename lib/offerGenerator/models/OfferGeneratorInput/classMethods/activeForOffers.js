// The active generated offers across many offers, oldest first.
export function activeForOffers(offerIds) {
  return this.findAll({
    where: { offer_id: offerIds, active: true },
    order: [['created_at']]
  })
}
