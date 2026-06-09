'use server'

import { withAdmin } from '@/lib/auth/withAdmin'
import { listConflicts } from '@/lib/google/controllers/listConflicts'

export const listConflictsAction = withAdmin(listConflicts, [])
