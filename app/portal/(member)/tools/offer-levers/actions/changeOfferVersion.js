'use server'

import { withMember } from '@/lib/portalMember/controllers'
import { changeOfferVersion } from '@/lib/offerGenerator/controllers'

// Bump one of the caller's offers up/down by version deltas.
export const changeOfferVersionAction = withMember(
  (contactId, offerId, dMajor, dMinor) =>
    changeOfferVersion(contactId, offerId, dMajor, dMinor))
