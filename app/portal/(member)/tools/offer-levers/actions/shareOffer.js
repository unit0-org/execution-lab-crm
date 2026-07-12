'use server'

import { withMember } from '@/lib/portalMember/controllers'
import { shareOffer } from '@/lib/offerGenerator/controllers'

// Share one of the caller's offers with another contact (view + comment).
export const shareOfferAction = withMember((contactId, offerId, targetId) =>
  shareOffer(contactId, offerId, targetId))
