import { portalUrl } from '@/lib/portal/portalUrl'

const excerpt = (body) => (body || '').slice(0, 200)

// Email template vars for an offer-comment mention notification.
export function offerCommentVars(input) {
  return {
    actor_name: input.actorName || 'Someone',
    offer_name: input.offerName || 'an offer',
    comment_excerpt: excerpt(input.body),
    offer_url: portalUrl('/tools/offer-levers/' + input.offerId)
  }
}
