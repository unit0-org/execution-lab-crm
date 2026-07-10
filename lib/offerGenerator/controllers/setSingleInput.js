import { OfferGeneratorInput, Offer } from '../models'

// Upsert a single-valued input (seed / audience / primary outcome, or a
// lever) for an offer the contact owns — one row per type per offer.
export async function setSingleInput(contactId, offerId, inputType, value) {
  const offer = await Offer.getOwned(contactId, offerId)

  if (!offer) return { error: 'Offer not found' }

  await OfferGeneratorInput.setSingle(offerId, inputType, value)
  await offer.touch()

  return { inputType, value }
}
