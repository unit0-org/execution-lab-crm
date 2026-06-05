'use server'

import { sendInvoice } from '@/lib/invoice/controllers/sendInvoice'

export async function sendInvoiceAction(id) {
  return sendInvoice(id)
}
