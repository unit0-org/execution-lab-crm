'use server'

import { withMember } from '@/lib/portalMember/controllers'
import { removeInput } from '@/lib/offerGenerator/controllers'

// Delete one repeatable row, scoped to the caller's contact.
export const removeOfferInputAction = withMember((contactId, id) =>
  removeInput(contactId, id))
