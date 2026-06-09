'use server'

import { withAdmin } from '@/lib/auth/withAdmin'
import { saveInvoiceSetting }
  from '@/lib/invoice/controllers/saveInvoiceSetting'
import { formToSetting } from './formToSetting'

export const saveInvoiceSettingAction = withAdmin(
  async (organizationId, formData) => {
    try {
      await saveInvoiceSetting(organizationId, formToSetting(formData))

      return { ok: true }
    } catch (e) {
      return { error: e.message }
    }
  }
)
