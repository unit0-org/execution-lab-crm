'use server'

import { withAdmin } from '@/lib/auth/withAdmin'
import { saveCompanyProfile }
  from '@/lib/company/controllers/saveCompanyProfile'
import { formToCompany } from './formToCompany'

export const saveCompanyAction = withAdmin(
  async (organizationId, formData) => {
    try {
      await saveCompanyProfile(organizationId, formToCompany(formData))

      return { ok: true }
    } catch (e) {
      return { error: e.message }
    }
  }
)
