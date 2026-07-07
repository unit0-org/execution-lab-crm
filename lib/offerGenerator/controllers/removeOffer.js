import { Offer } from '../models'

// Delete an offer the contact owns; its inputs cascade away.
export async function removeOffer(contactId, offerId) {
  await Offer.remove(contactId, offerId)

  return { id: offerId, removed: true }
}
