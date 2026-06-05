'use server'

import { addInvoiceLine } from '@/lib/invoice/controllers/addInvoiceLine'
import { formToLine } from './formToLine'

export async function addLineAction(formData) {
  const id = formData.get('invoice_id')

  try {
    await addInvoiceLine(id, formToLine(formData))

    return { ok: true }
  } catch (e) {
    return { error: e.message }
  }
}
