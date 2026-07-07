'use server'

import { withMember } from '@/lib/portalMember/controllers'
import { renameOffer } from '@/lib/offerGenerator/controllers'

// Rename one of the caller's offers.
export const renameOfferAction = withMember((contactId, offerId, name) =>
  renameOffer(contactId, offerId, name))
