import { OfferGeneratorInput, Offer } from '../models'

// Append an empty repeatable row to an offer the contact owns; returns the
// new row (with id).
export async function addInput(contactId, offerId, inputType) {
  const offer = await Offer.getOwned(contactId, offerId)

  if (!offer) return { error: 'Offer not found' }

  const row = await OfferGeneratorInput.addRow(offerId, inputType)
  await offer.touch()

  return row.toJSON()
}
