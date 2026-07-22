'use server'

import { withMember } from '@/lib/auth/withMember'
import { deleteCompany } from '@/lib/company/controllers/deleteCompany'

export const removeCompanyAction = withMember(
  async (id) => {
    await deleteCompany(id)

    return { ok: true }
  }
)
