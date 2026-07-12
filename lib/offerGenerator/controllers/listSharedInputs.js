import { OfferGeneratorInput, OfferShare } from '../models'

// Every input for an offer shared with this contact, as plain rows. Empty
// when it isn't shared with them — the read-only twin of listInputs.
export async function listSharedInputs(contactId, offerId) {
  const shared = await OfferShare.isSharedWith(offerId, contactId)

  if (!shared) return []

  const rows = await OfferGeneratorInput.forOffer(offerId)

  return rows.map((row) => row.toJSON())
}
