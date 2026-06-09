'use server'

import { withAdmin } from '@/lib/auth/withAdmin'
import { syncContactsForOrg } from '@/lib/google/contacts'

export const syncContactsAction = withAdmin(syncContactsForOrg)
