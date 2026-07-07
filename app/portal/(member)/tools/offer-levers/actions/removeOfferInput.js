'use server'

import { withMember } from '@/lib/portalMember/controllers'
import { removeInput } from '@/lib/offerGenerator/controllers'

// Delete one repeatable row from one of the caller's offers.
export const removeOfferInputAction = withMember((contactId, offerId, id) =>
  removeInput(contactId, offerId, id))
