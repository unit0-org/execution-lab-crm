import { ensureInvoiceSetting } from './ensureInvoiceSetting'
import { resendApiKey } from '@/lib/email/controllers/resendApiKey'
import { sendEmail } from '@/lib/email/sendEmail'
import { invoiceEmail } from './invoiceEmail'

// Email the invoice PDF to the client, when a recipient and key exist.
export async function emailInvoice(invoice, pdf, url) {
  const org = invoice.organization_id
  const setting = await ensureInvoiceSetting(org)
  const to = invoice.bill_to_email
  const key = resendApiKey()

  if (!to || !key) return { skipped: true }

  return sendEmail(key, invoiceEmail(invoice, setting, pdf, url, to))
}
