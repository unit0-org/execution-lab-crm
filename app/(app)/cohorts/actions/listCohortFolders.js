'use server'

import { withMember } from '@/lib/auth/withMember'
import { listCohortFolders } from '@/lib/cohort/controllers'

export const listCohortFoldersAction = withMember(
  (cohortId) => listCohortFolders(cohortId),
  []
)
