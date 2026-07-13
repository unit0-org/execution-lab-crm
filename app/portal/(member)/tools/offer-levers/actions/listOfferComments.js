'use server'

import { withMember } from '@/lib/portalMember/controllers'
import { listOfferComments } from '@/lib/offerGenerator/controllers'

// The offer's comments (oldest first) for anyone who can see the offer.
export const listOfferCommentsAction = withMember((contactId, offerId) =>
  listOfferComments(contactId, offerId))
