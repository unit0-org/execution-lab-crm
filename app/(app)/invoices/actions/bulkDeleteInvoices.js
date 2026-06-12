'use server'

import { deleteInvoices } from '@/lib/invoice/controllers/deleteInvoices'

export async function bulkDeleteInvoicesAction(ids) {
  return deleteInvoices(ids)
}
