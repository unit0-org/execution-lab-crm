'use server'

import { withAdmin } from '@/lib/auth/withAdmin'
import { disconnectGoogleAccount }
  from '@/lib/google/controllers/disconnectGoogleAccount'

export const disconnectAccountAction =
  withAdmin((_org, id) => disconnectGoogleAccount(id))
