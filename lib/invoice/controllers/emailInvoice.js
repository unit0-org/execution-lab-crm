import { ensureInvoiceSetting } from './ensureInvoiceSetting'
import { resendApiKey } from '@/lib/email/controllers/resendApiKey'
import { sendEmail } from '@/lib/email/sendEmail'
import { invoiceEmail } from './invoiceEmail'
import { invoiceMessage } from './invoiceMessage'

// Email the invoice PDF to the client. Uses the edited message when one
// is supplied, otherwise the org's template, when a recipient + key exist.
export async function emailInvoice(invoice, pdf, url, edit) {
  const setting = await ensureInvoiceSetting(invoice.organization_id)
  const message = edit || await invoiceMessage(invoice, url)
  const key = resendApiKey()

  if (!message.to || !key) return { skipped: true }

  return sendEmail(key, invoiceEmail(setting, invoice, pdf, message))
}
