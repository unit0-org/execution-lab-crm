'use server'

import { markInvoicesSent }
  from '@/lib/invoice/controllers/markInvoicesSent'

export async function bulkMarkInvoicesSentAction(ids) {
  return markInvoicesSent(ids)
}
