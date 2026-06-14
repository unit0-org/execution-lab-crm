'use server'

import { withAdmin } from '@/lib/auth/withAdmin'
import { resolveConflict } from '@/lib/google/controllers/resolveConflict'

const handle = (_org, formData) =>
  resolveConflict(formData.get('id'), formData.get('winner'))

export const resolveConflictAction = withAdmin(handle)
