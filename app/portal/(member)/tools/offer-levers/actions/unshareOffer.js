'use server'

import { withMember } from '@/lib/portalMember/controllers'
import { unshareOffer } from '@/lib/offerGenerator/controllers'

// Stop sharing one of the caller's offers with a contact.
export const unshareOfferAction = withMember((contactId, offerId, targetId) =>
  unshareOffer(contactId, offerId, targetId))
