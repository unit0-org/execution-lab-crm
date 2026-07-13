// Replace a single-valued input: clear the old row, then store the new
// value (a blank value just clears it).
export async function setSingle(offerId, type, value) {
  await this.destroy({ where: { offer_id: offerId, input_type: type } })

  if (!value.trim()) return

  await this.create({ offer_id: offerId, input_type: type, value })
}
