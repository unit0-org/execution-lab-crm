// Flag/unflag a generated-offer row as actively selling.
export function setActive(offerId, id, active) {
  return this.update({ active }, { where: { offer_id: offerId, id } })
}
