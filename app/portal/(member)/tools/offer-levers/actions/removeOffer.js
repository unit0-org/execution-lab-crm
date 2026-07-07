'use server'

import { withMember } from '@/lib/portalMember/controllers'
import { removeOffer } from '@/lib/offerGenerator/controllers'

// Delete one of the caller's offers (its inputs cascade).
export const removeOfferAction = withMember((contactId, offerId) =>
  removeOffer(contactId, offerId))
