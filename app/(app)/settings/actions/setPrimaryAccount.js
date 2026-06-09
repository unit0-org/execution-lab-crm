'use server'

import { withAdmin } from '@/lib/auth/withAdmin'
import { setPrimaryAccount }
  from '@/lib/google/controllers/setPrimaryAccount'

export const setPrimaryAccountAction = withAdmin(setPrimaryAccount)
