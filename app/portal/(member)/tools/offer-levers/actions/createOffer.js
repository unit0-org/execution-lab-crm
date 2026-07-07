'use server'

import { withMember } from '@/lib/portalMember/controllers'
import { createOffer } from '@/lib/offerGenerator/controllers'

// Create a new offer for the caller; returns the new row (with id).
export const createOfferAction = withMember((contactId, name) =>
  createOffer(contactId, name))
