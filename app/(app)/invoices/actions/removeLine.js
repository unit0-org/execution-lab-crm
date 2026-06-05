'use server'

import { removeInvoiceLine } from '@/lib/invoice/controllers/removeInvoiceLine'

export async function removeLineAction(lineId) {
  return removeInvoiceLine(lineId)
}
