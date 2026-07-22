'use server'

import { withMember } from '@/lib/auth/withMember'
import { companyContacts } from '@/lib/company/controllers/companyContacts'

export const companyContactsAction = withMember(
  (companyId) => companyContacts(companyId),
  []
)
