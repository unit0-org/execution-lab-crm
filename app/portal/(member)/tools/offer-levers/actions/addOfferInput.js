'use server'

import { withMember } from '@/lib/portalMember/controllers'
import { addInput } from '@/lib/offerGenerator/controllers'
import { isRepeatableType } from '../offerInputTypes'

// Add an empty repeatable input of a type to an offer; returns the new row.
export const addOfferInputAction = withMember(
  (contactId, offerId, inputType) => {
    if (!isRepeatableType(inputType)) return { error: 'Unknown field' }

    return addInput(contactId, offerId, inputType)
  })
