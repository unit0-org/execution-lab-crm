import { OfferGeneratorInput, Offer } from '../models'

// Delete one repeatable row, scoped to an offer the contact owns.
export async function removeInput(contactId, offerId, id) {
  const offer = await Offer.getOwned(contactId, offerId)

  if (!offer) return { error: 'Offer not found' }

  await OfferGeneratorInput.remove(offerId, id)
  await offer.touch()

  return { id, removed: true }
}
