import { canViewOffer } from './canViewOffer'
import { offerAudience } from './offerAudience'

// Mention-picker options for an offer's discussion: everyone who can see it,
// as { value: contactId, label: name }. Empty when the caller can't view it.
export async function listOfferAudience(contactId, offerId) {
  if (!await canViewOffer(contactId, offerId)) return []

  const people = await offerAudience(offerId)

  return people.map((p) => ({ value: p.contactId, label: p.name || p.email }))
}
