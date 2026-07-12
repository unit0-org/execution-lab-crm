import { Offer, OfferShare } from '../models'

// Share one of the owner's offers with another contact (view + comment).
// No-ops unless the caller owns the offer and the target is someone else.
export async function shareOffer(ownerId, offerId, targetContactId) {
  if (!targetContactId || targetContactId === ownerId)
    return { shared: false }

  const offer = await Offer.getOwned(ownerId, offerId)

  if (!offer) return { shared: false }

  await OfferShare.shareWith(offerId, targetContactId)

  return { shared: true }
}
