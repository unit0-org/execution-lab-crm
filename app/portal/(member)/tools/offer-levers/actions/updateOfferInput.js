'use server'

import { withMember } from '@/lib/portalMember/controllers'
import { updateInput } from '@/lib/offerGenerator/controllers'

// Autosave one repeatable row's value on one of the caller's offers.
export const updateOfferInputAction = withMember(
  (contactId, offerId, id, value) =>
    updateInput(contactId, offerId, id, value))
