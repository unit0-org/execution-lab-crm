// Offer-scoped helpers for OfferGeneratorInput, kept out of the model file
// (short-model rule). Every op filters by offer_id; controllers verify the
// offer belongs to the caller's contact before calling these.
const where = (offerId, extra) => ({ offer_id: offerId, ...extra })

export function addStatics(model) {
  model.forOffer = function (offerId) {
    return this.findAll({ where: where(offerId), order: [['created_at']] })
  }

  model.setSingle = async function (offerId, type, value) {
    await this.destroy({ where: where(offerId, { input_type: type }) })

    if (!value.trim()) return

    await this.create(where(offerId, { input_type: type, value }))
  }

  model.addRow = function (offerId, type) {
    return this.create(where(offerId, { input_type: type, value: '' }))
  }

  model.edit = function (offerId, id, value) {
    return this.update({ value }, { where: where(offerId, { id }) })
  }

  model.remove = function (offerId, id) {
    return this.destroy({ where: where(offerId, { id }) })
  }
}
