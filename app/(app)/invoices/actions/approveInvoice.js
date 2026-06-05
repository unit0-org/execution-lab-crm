'use server'

import { approveInvoice } from '@/lib/invoice/controllers/approveInvoice'

export async function approveInvoiceAction(id) {
  return approveInvoice(id)
}
