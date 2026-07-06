'use server'

import { currentPortalMember } from '@/lib/portalMember/controllers'
import { updateInput } from '@/lib/offerGenerator/controllers'

// Autosave one repeatable row's value, scoped to the caller's contact.
export async function updateOfferInputAction(id, value) {
  const member = await currentPortalMember()

  if (!member?.contactId) return { error: 'No member' }

  return updateInput(member.contactId, id, value)
}
