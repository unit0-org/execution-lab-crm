'use server'

import { withMember } from '@/lib/auth/withMember'
import { contactGoogleLink }
  from '@/lib/google/controllers/contactGoogleLink'

export const contactGoogleLinkAction = withMember(contactGoogleLink, null)
