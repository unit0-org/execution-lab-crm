import { textToHtml } from '@/lib/email/controllers/textToHtml'
import { invoiceFromLine } from './invoiceFromLine'

const attachment = (invoice, pdf) => ({
  filename: `${invoice.number}.pdf`,
  content: pdf.toString('base64')
})

// Shape the Resend payload from an (editable) invoice message, with the
// rendered PDF attached.
export function invoiceEmail(setting, invoice, pdf, message) {
  return {
    from: invoiceFromLine(setting),
    to: message.to,
    cc: message.cc,
    subject: message.subject,
    html: textToHtml(message.body),
    attachments: [attachment(invoice, pdf)]
  }
}
