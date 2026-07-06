import { OfferGeneratorInput } from '../models'

// Append an empty row of a repeatable type; returns the new row (with id).
export async function addInput(contactId, inputType) {
  const row = await OfferGeneratorInput.addRow(contactId, inputType)

  return row.toJSON()
}
