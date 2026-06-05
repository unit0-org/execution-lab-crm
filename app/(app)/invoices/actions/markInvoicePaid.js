'use server'

import { markInvoicePaid } from '@/lib/invoice/controllers/markInvoicePaid'

export async function markInvoicePaidAction(id) {
  return markInvoicePaid(id)
}
