'use server'

import { withAdmin } from '@/lib/auth/withAdmin'
import { saveOrganizationProfile }
  from '@/lib/organizationProfile/controllers/saveOrganizationProfile'
import { formToOrganization } from './formToOrganization'

export const saveOrganizationAction = withAdmin(
  async (organizationId, formData) => {
    try {
      await saveOrganizationProfile(
        organizationId, formToOrganization(formData)
      )

      return { ok: true }
    } catch (e) {
      return { error: e.message }
    }
  }
)
