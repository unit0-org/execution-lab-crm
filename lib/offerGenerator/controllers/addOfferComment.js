import { OfferComment, OfferCommentMention } from '../models'
import { canViewOffer } from './canViewOffer'
import { offerAudience } from './offerAudience'
import { notifyOfferMentions } from './notifyOfferMentions'

const allowedMentions = (ids, audience) => {
  const canSee = new Set(audience.map((p) => p.contactId))

  return [...new Set(ids || [])].filter((id) => canSee.has(id))
}

// Post a comment on an offer's thread (owner or a shared member only), record
// its @-tags (limited to people who can see the offer), and email the newly
// tagged. Best-effort email — a send failure never blocks the comment.
export async function addOfferComment(contactId, offerId, body, mentionedIds) {
  if (!body?.trim()) return { error: 'A comment is required' }

  if (!await canViewOffer(contactId, offerId)) return { ok: true }

  const comment = await OfferComment.createFor(offerId, contactId, body.trim())
  const audience = await offerAudience(offerId)
  const mentions = allowedMentions(mentionedIds, audience)

  await OfferCommentMention.recordFor(comment.id, mentions)
  await notifyOfferMentions({
    offerId, actorContactId: contactId, body, audience, mentionedIds: mentions
  })

  return { ok: true }
}
