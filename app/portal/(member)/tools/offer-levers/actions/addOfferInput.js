'use server'

import { withMember } from '@/lib/portalMember/controllers'
import { addInput } from '@/lib/offerGenerator/controllers'
import { isRepeatableType } from '../offerInputTypes'

// Add an empty repeatable input of a type; returns the new row (with id).
export const addOfferInputAction = withMember((contactId, inputType) => {
  if (!isRepeatableType(inputType)) return { error: 'Unknown field' }

  return addInput(contactId, inputType)
})
