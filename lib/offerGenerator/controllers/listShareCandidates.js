import { Offer, OfferShare } from '../models'
import { listPortalMembers } from '@/lib/portalMember/controllers'

const shareable = (m) => m.status !== 'revoked' && m.email
const toCandidate = (shared) => (m) => ({
  contactId: m.contactId, name: m.name, email: m.email,
  shared: shared.has(m.contactId)
})

// People the owner can share this offer with (portal members minus the
// owner), each flagged whether it's already shared. Empty if not the owner.
export async function listShareCandidates(ownerId, offerId) {
  const offer = await Offer.getOwned(ownerId, offerId)

  if (!offer) return []

  const shared = new Set(await OfferShare.contactIdsForOffer(offerId))
  const members = await listPortalMembers()

  return members
    .filter((m) => shareable(m) && m.contactId !== ownerId)
    .map(toCandidate(shared))
}
