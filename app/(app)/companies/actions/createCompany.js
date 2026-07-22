'use server'

import { withMember } from '@/lib/auth/withMember'
import { createCompany } from '@/lib/company/controllers/createCompany'
import { readCompanyForm } from '@/lib/company/controllers/companyForm'

export const createCompanyAction = withMember(
  async (formData) => {
    const res = await createCompany(readCompanyForm(formData))

    if (res.error) return { error: res.error }

    return { ok: true, id: res.id }
  }
)
