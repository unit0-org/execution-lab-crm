'use server'

import { deleteInvoice } from '@/lib/invoice/controllers/deleteInvoice'

export async function deleteInvoiceAction(id) {
  return deleteInvoice(id)
}
