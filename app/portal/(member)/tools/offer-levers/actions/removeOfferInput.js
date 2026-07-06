'use server'

import { currentPortalMember } from '@/lib/portalMember/controllers'
import { removeInput } from '@/lib/offerGenerator/controllers'

// Delete one repeatable row, scoped to the caller's contact.
export async function removeOfferInputAction(id) {
  const member = await currentPortalMember()

  if (!member?.contactId) return { error: 'No member' }

  return removeInput(member.contactId, id)
}
