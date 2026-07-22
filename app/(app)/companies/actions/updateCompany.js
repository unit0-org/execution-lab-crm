'use server'

import { withMember } from '@/lib/auth/withMember'
import { updateCompany } from '@/lib/company/controllers/updateCompany'
import { readCompanyForm } from '@/lib/company/controllers/companyForm'

export const updateCompanyAction = withMember(
  async (formData) => {
    await updateCompany(formData.get('id'), readCompanyForm(formData))

    return { ok: true }
  }
)
