// Update one input row's value.
export function edit(offerId, id, value) {
  return this.update({ value }, { where: { offer_id: offerId, id } })
}
