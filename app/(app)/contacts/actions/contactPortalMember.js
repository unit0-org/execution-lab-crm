'use server'

import { withMember } from '@/lib/auth/withMember'
import { portalMemberForContact } from '@/lib/portalMember/controllers'

export const contactPortalMemberAction = withMember(
  (id) => portalMemberForContact(id),
  null
)
