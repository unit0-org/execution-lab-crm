import { OfferGeneratorInput, Offer } from '../models'

// Every input for an offer the contact owns, as plain rows. Empty when the
// offer isn't theirs (or there's no contact/offer).
export async function listInputs(contactId, offerId) {
  const offer = offerId && await Offer.getOwned(contactId, offerId)

  if (!offer) return []

  const rows = await OfferGeneratorInput.forOffer(offerId)

  return rows.map((row) => row.toJSON())
}
