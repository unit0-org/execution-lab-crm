'use server'

import { getInvoice } from '@/lib/invoice/controllers/getInvoice'

export async function getInvoiceAction(id) {
  return getInvoice(id)
}
