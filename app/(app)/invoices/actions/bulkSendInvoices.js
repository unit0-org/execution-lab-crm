'use server'

import { sendInvoices } from '@/lib/invoice/controllers/sendInvoices'

export async function bulkSendInvoicesAction(items) {
  return sendInvoices(items)
}
