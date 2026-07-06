'use server'

import { currentPortalMember } from '@/lib/portalMember/controllers'
import { setSingleInput } from '@/lib/offerGenerator/controllers'
import { isSingleType } from '../offerInputTypes'

// Autosave one single-valued field (context single or lever). Resolves the
// contact server-side — never trusts a client-supplied id.
export async function setOfferFieldAction(inputType, value) {
  if (!isSingleType(inputType)) return { error: 'Unknown field' }

  const member = await currentPortalMember()

  if (!member?.contactId) return { error: 'No member' }

  return setSingleInput(member.contactId, inputType, value)
}
