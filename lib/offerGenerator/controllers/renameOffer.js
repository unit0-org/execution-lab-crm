import { Offer } from '../models'

// Rename an offer the contact owns.
export async function renameOffer(contactId, offerId, name) {
  await Offer.rename(contactId, offerId, name)

  return { id: offerId, name }
}
