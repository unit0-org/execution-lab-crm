'use server'

import { withMember } from '@/lib/portalMember/controllers'
import { setSingleInput } from '@/lib/offerGenerator/controllers'
import { isSingleType } from '../offerInputTypes'

// Autosave one single-valued field (context single or lever) on an offer.
export const setOfferFieldAction = withMember(
  (contactId, offerId, inputType, value) => {
    if (!isSingleType(inputType)) return { error: 'Unknown field' }

    return setSingleInput(contactId, offerId, inputType, value)
  })
