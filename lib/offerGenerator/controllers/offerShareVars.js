import { portalUrl } from '@/lib/portal/portalUrl'

// Email template vars for an offer-shared notification.
export function offerShareVars(input) {
  return {
    actor_name: input.ownerName || 'Someone',
    offer_name: input.offerName || 'an offer',
    offer_url: portalUrl('/tools/offer-levers/' + input.offerId)
  }
}
