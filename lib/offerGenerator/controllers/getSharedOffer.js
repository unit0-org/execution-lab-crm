import { Offer, OfferShare } from '../models'
import { Contact } from '@/lib/contact/models'

// One offer shared with this contact (plain, with the owner's name), or null
// when it isn't shared with them. Read-only access for the shared view.
export async function getSharedOffer(contactId, offerId) {
  const shared = await OfferShare.isSharedWith(offerId, contactId)

  if (!shared) return null

  const offer = await Offer.findOne({
    where: { id: offerId }, include: [{ model: Contact }]
  })

  if (!offer) return null

  return { ...offer.toJSON(), ownerName: offer.contact?.full_name || null }
}
