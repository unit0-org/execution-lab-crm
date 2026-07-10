import { OfferGeneratorInput, Offer } from '../models'

// Edit one repeatable row's value, scoped to an offer the contact owns.
export async function updateInput(contactId, offerId, id, value) {
  const offer = await Offer.getOwned(contactId, offerId)

  if (!offer) return { error: 'Offer not found' }

  await OfferGeneratorInput.edit(offerId, id, value)
  await offer.touch()

  return { id, value }
}
