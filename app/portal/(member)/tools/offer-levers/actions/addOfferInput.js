'use server'

import { currentPortalMember } from '@/lib/portalMember/controllers'
import { addInput } from '@/lib/offerGenerator/controllers'
import { isRepeatableType } from '../offerInputTypes'

// Add an empty repeatable input of a type; returns the new row (with id).
export async function addOfferInputAction(inputType) {
  if (!isRepeatableType(inputType)) return { error: 'Unknown field' }

  const member = await currentPortalMember()

  if (!member?.contactId) return { error: 'No member' }

  return addInput(member.contactId, inputType)
}
