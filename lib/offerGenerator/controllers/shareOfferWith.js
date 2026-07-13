import { Offer, OfferShare } from '../models'
import { notifyOfferShare } from './notifyOfferShare'

const targetsFor = (ids, ownerId) =>
  (ids || []).filter((id) => id && id !== ownerId)

// Share one of the owner's offers with several contacts at once (view +
// comment), then email everyone newly added. No-ops unless the caller owns
// the offer; anyone who already had access is skipped, so nobody is
// emailed twice.
export async function shareOfferWith(ownerId, offerId, targetContactIds) {
  const offer = await Offer.getOwned(ownerId, offerId)
  const targets = targetsFor(targetContactIds, ownerId)

  if (!offer || !targets.length) return { shared: 0 }

  const added = await OfferShare.shareWithMany(offerId, targets)

  await notifyOfferShare({
    offerId, ownerId, offerName: offer.name, contactIds: added
  })

  return { shared: added.length }
}
