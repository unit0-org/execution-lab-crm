'use server'

import { sendInvoices } from '@/lib/invoice/controllers/sendInvoices'

export async function bulkSendInvoicesAction(ids) {
  return sendInvoices(ids)
}
