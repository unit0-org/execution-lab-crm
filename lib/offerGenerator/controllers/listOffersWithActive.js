import { Offer, OfferGeneratorInput } from '../models'
import { groupActive } from './groupActive'

// Every offer a contact owns (newest first), each with its active generated
// offers attached as `activeOffers: [{ id, value }]` for the list screen.
export async function listOffersWithActive(contactId) {
  if (!contactId) return []

  const offers = await Offer.forContact(contactId)
  const ids = offers.map((offer) => offer.id)
  const rows = ids.length ? await OfferGeneratorInput.activeForOffers(ids) : []
  const byOffer = groupActive(rows)

  return offers.map((offer) => ({
    ...offer.toJSON(),
    activeOffers: byOffer[offer.id] || []
  }))
}
