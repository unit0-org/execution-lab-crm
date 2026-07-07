'use server'

import { withMember } from '@/lib/portalMember/controllers'
import { setInputActive } from '@/lib/offerGenerator/controllers'

// Toggle one generated-offer row's active flag on one of the caller's offers.
export const setOfferInputActiveAction = withMember(
  (contactId, offerId, id, active) =>
    setInputActive(contactId, offerId, id, active))
