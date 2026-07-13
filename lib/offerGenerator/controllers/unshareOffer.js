import { Offer, OfferShare } from '../models'

// Stop sharing one of the owner's offers with a contact. No-ops unless the
// caller owns the offer.
export async function unshareOffer(ownerId, offerId, targetContactId) {
  const offer = await Offer.getOwned(ownerId, offerId)

  if (!offer) return { shared: true }

  await OfferShare.unshare(offerId, targetContactId)

  return { shared: false }
}
