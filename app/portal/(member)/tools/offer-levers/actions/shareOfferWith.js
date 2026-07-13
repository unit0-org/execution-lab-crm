'use server'

import { withMember } from '@/lib/portalMember/controllers'
import { shareOfferWith } from '@/lib/offerGenerator/controllers'

// Share one of the caller's offers with several people, emailing each.
export const shareOfferWithAction = withMember((contactId, offerId, ids) =>
  shareOfferWith(contactId, offerId, ids))
