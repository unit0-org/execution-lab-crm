'use server'

import { currentMembership } from '@/lib/org/controllers/currentMembership'
import { saveInvoiceSetting }
  from '@/lib/invoice/controllers/saveInvoiceSetting'
import { formToSetting } from './formToSetting'

export async function saveInvoiceSettingAction(formData) {
  const member = await currentMembership()

  if (member?.role !== 'admin') return { error: 'Forbidden' }

  try {
    await saveInvoiceSetting(member.organizationId, formToSetting(formData))

    return { ok: true }
  } catch (e) {
    return { error: e.message }
  }
}
