'use server'

import { voidInvoice } from '@/lib/invoice/controllers/voidInvoice'

export async function voidInvoiceAction(id) {
  return voidInvoice(id)
}
