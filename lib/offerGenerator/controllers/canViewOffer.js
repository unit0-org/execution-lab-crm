import { Offer, OfferShare } from '../models'

// Whether a contact may see an offer: its owner, or someone it's shared with.
export async function canViewOffer(contactId, offerId) {
  const owned = await Offer.getOwned(contactId, offerId)

  if (owned) return true

  return OfferShare.isSharedWith(offerId, contactId)
}
