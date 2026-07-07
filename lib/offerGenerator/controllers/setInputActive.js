import { OfferGeneratorInput, Offer } from '../models'

// Mark one generated-offer row active/inactive on an offer the contact owns.
export async function setInputActive(contactId, offerId, id, active) {
  const offer = await Offer.getOwned(contactId, offerId)

  if (!offer) return { error: 'Offer not found' }

  await OfferGeneratorInput.setActive(offerId, id, active)

  return { id, active }
}
