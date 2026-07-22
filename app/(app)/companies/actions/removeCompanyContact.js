'use server'

import { withMember } from '@/lib/auth/withMember'
import { removeCompanyContact }
  from '@/lib/company/controllers/removeCompanyContact'

export const removeCompanyContactAction = withMember(
  async ({ companyId, contactId }) => {
    await removeCompanyContact(companyId, contactId)

    return { ok: true }
  }
)
