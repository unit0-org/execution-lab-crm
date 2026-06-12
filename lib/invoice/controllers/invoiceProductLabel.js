import { InvoiceLine } from '../models'

// The product(s) or event(s) named on an invoice's lines, comma-joined.
export async function invoiceProductLabel(invoiceId) {
  const lines = await InvoiceLine.findAll({
    where: { invoice_id: invoiceId },
    order: [['position', 'ASC']]
  })

  return lines.map((line) => line.description).filter(Boolean).join(', ')
}
