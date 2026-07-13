import { listOfferComments, listOfferAudience }
  from '@/lib/offerGenerator/controllers'

// The discussion props a viewer needs: the comment thread plus who they can
// @-tag (everyone who can see the offer).
export async function loadDiscussion(contactId, offerId) {
  const comments = await listOfferComments(contactId, offerId)
  const audience = await listOfferAudience(contactId, offerId)

  return { comments, audience }
}
