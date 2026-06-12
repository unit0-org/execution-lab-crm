'use server'

import { previewInvoiceEmails }
  from '@/lib/invoice/controllers/previewInvoiceEmails'

export async function previewInvoiceEmailsAction(ids) {
  return previewInvoiceEmails(ids)
}
