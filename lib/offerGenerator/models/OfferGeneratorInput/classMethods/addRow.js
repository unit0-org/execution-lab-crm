// Add an empty row for a repeatable input type.
export function addRow(offerId, type) {
  return this.create({ offer_id: offerId, input_type: type, value: '' })
}
