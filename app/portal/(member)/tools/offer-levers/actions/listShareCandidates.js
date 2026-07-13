'use server'

import { withMember } from '@/lib/portalMember/controllers'
import { listShareCandidates } from '@/lib/offerGenerator/controllers'

// People the caller can share this offer with, each flagged if already shared.
export const listShareCandidatesAction = withMember((contactId, offerId) =>
  listShareCandidates(contactId, offerId))
