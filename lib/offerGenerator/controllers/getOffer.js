import { Offer } from '../models'

// One offer the contact owns (plain row), or null when it isn't theirs.
export async function getOffer(contactId, offerId) {
  const offer = await Offer.getOwned(contactId, offerId)

  if (!offer) return null

  return offer.toJSON()
}
