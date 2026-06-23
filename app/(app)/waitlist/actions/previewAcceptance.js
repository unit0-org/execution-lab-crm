'use server'

import { withMember } from '@/lib/auth/withMember'
import { previewAcceptance } from '@/lib/waitlist/controllers'

export const previewAcceptanceAction = withMember(
  (entryId, cohortId) => previewAcceptance(entryId, cohortId),
  null
)
