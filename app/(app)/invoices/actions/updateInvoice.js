'use server'

import { currentMembership } from '@/lib/org/controllers/currentMembership'
import { updateInvoice } from '@/lib/invoice/controllers/updateInvoice'
import { invoiceSaveError } from '@/lib/invoice/controllers/invoiceSaveError'

export async function updateInvoiceAction(id, data) {
  const member = await currentMembership()

  if (!member) return { error: 'Forbidden' }

  try {
    const invoice = await updateInvoice(id, data)

    return { ok: true, id: invoice.id }
  } catch (e) {
    return { error: invoiceSaveError(e) }
  }
}
