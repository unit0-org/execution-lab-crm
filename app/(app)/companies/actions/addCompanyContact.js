'use server'

import { withMember } from '@/lib/auth/withMember'
import { addCompanyContact }
  from '@/lib/company/controllers/addCompanyContact'

export const addCompanyContactAction = withMember(
  ({ companyId, contactId, role }) =>
    addCompanyContact(companyId, contactId, role)
)
