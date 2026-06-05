'use server'

import { currentMembership } from '@/lib/org/controllers/currentMembership'
import { getInvoiceSetting } from '@/lib/invoice/controllers/getInvoiceSetting'

export async function getInvoiceSettingAction() {
  const member = await currentMembership()

  if (!member) return null

  return getInvoiceSetting(member.organizationId)
}
