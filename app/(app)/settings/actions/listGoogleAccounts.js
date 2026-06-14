'use server'

import { withAdmin } from '@/lib/auth/withAdmin'
import { listGoogleAccounts }
  from '@/lib/google/controllers/listGoogleAccounts'

export const listGoogleAccountsAction =
  withAdmin((_org) => listGoogleAccounts(), [])
