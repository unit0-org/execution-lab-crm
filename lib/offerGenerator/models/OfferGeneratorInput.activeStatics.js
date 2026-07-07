// Active-flag helpers for OfferGeneratorInput (generated offers a member is
// actively selling). Kept separate to keep the base statics file short.
const where = (offerId, extra) => ({ offer_id: offerId, ...extra })

export function addActiveStatics(model) {
  model.setActive = function (offerId, id, active) {
    return this.update({ active }, { where: where(offerId, { id }) })
  }

  model.activeForOffers = function (offerIds) {
    return this.findAll({
      where: { offer_id: offerIds, active: true },
      order: [['created_at']]
    })
  }
}
