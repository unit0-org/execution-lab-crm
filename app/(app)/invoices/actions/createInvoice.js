'use server'

import { currentMembership } from '@/lib/org/controllers/currentMembership'
import { createInvoice } from '@/lib/invoice/controllers/createInvoice'
import { invoiceSaveError } from '@/lib/invoice/controllers/invoiceSaveError'

export async function createInvoiceAction(data) {
  const member = await currentMembership()

  if (!member) return { error: 'Forbidden' }

  try {
    const invoice = await createInvoice(member.organizationId, data)

    return { ok: true, id: invoice.id }
  } catch (e) {
    return { error: invoiceSaveError(e) }
  }
}
