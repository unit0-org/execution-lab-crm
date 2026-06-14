'use server'

import { withAdmin } from '@/lib/auth/withAdmin'
import { syncContacts } from '@/lib/google/contacts'

export const syncContactsAction = withAdmin((_org) => syncContacts())
