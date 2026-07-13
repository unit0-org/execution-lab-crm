// Delete one input row.
export function remove(offerId, id) {
  return this.destroy({ where: { offer_id: offerId, id } })
}
