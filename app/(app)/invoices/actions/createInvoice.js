'use server'

import { currentMembership } from '@/lib/org/controllers/currentMembership'
import { createInvoice } from '@/lib/invoice/controllers/createInvoice'
import { formToInvoice } from './formToInvoice'

export async function createInvoiceAction(formData) {
  const member = await currentMembership()

  if (!member) return { error: 'Forbidden' }

  try {
    await createInvoice(member.organizationId, formToInvoice(formData))

    return { ok: true }
  } catch (e) {
    return { error: e.message }
  }
}
