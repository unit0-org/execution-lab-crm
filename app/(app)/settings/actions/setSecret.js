'use server'

import { withAdmin } from '@/lib/auth/withAdmin'
import { setOrgSecret } from '@/lib/org/controllers/setOrgSecret'

export const setSecretAction = withAdmin(
  async (organizationId, formData) => {
    try {
      return await setOrgSecret(organizationId, formData.get('kind'),
        formData.get('value'))
    } catch (e) {
      return { error: e.message }
    }
  }
)
