import { Offer, OfferGeneratorInput, OfferShare } from '../models'
import { Contact } from '@/lib/contact/models'
import { groupActive } from './groupActive'

const shape = (byOffer) => (offer) => ({
  ...offer.toJSON(),
  ownerName: offer.contact?.full_name || null,
  activeOffers: byOffer[offer.id] || []
})

// Offers other members have shared with this contact, each with its owner's
// name and active generated offers, for the read-only "Shared with me" list.
export async function listOffersSharedWith(contactId) {
  if (!contactId) return []

  const ids = await OfferShare.offerIdsForContact(contactId)

  if (!ids.length) return []

  const offers = await Offer.findAll({
    where: { id: ids }, include: [{ model: Contact }],
    order: [['created_at', 'DESC']]
  })
  const rows = await OfferGeneratorInput.activeForOffers(ids)

  return offers.map(shape(groupActive(rows)))
}
