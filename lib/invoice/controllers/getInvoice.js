import { Invoice } from '../models'
import { toInvoiceDetail } from './toInvoiceDetail'

// One invoice with its contact, company and line items, shaped for the UI.
export async function getInvoice(invoiceId) {
  const row = await Invoice.findByPk(invoiceId, {
    include: [
      { association: 'contact' },
      { association: 'company' },
      { association: 'line' }
    ]
  })

  if (!row) return null

  return toInvoiceDetail(row.toJSON())
}
