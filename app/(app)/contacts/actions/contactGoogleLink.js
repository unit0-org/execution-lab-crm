'use server'

import { withOrg } from '@/lib/auth/withOrg'
import { contactGoogleLink }
  from '@/lib/google/controllers/contactGoogleLink'

export const contactGoogleLinkAction = withOrg(contactGoogleLink, null)
