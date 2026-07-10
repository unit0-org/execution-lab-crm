'use server'

import { withAdmin } from '@/lib/auth/withAdmin'
import { saveDigestSetting }
  from '@/lib/digest/controllers/saveDigestSetting'
import { formToDigestSetting } from './formToDigestSetting'

export const saveDigestSettingAction = withAdmin(
  async (organizationId, formData) => {
    try {
      await saveDigestSetting(organizationId, formToDigestSetting(formData))

      return { ok: true }
    } catch (e) {
      return { error: e.message }
    }
  }
)
