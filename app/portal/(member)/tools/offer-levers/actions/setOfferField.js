'use server'

import { withMember } from '@/lib/portalMember/controllers'
import { setSingleInput } from '@/lib/offerGenerator/controllers'
import { isSingleType } from '../offerInputTypes'

// Autosave one single-valued field (context single or lever).
export const setOfferFieldAction = withMember((contactId, inputType, value) => {
  if (!isSingleType(inputType)) return { error: 'Unknown field' }

  return setSingleInput(contactId, inputType, value)
})
