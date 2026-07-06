'use server'

import { withMember } from '@/lib/portalMember/controllers'
import { updateInput } from '@/lib/offerGenerator/controllers'

// Autosave one repeatable row's value, scoped to the caller's contact.
export const updateOfferInputAction = withMember((contactId, id, value) =>
  updateInput(contactId, id, value))
