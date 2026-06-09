'use server'

import { withAdmin } from '@/lib/auth/withAdmin'
import { setContactsSyncEnabled }
  from '@/lib/google/controllers/setContactsSyncEnabled'

export const setSyncEnabledAction = withAdmin(setContactsSyncEnabled)
