import { Invoice, InvoiceLine } from '../models'

// Recompute an invoice's subtotal, tax and total from its lines + rate.
export async function recalcTotals(invoiceId) {
  const lines = await InvoiceLine.findAll({
    where: { invoice_id: invoiceId }
  })
  const subtotal = lines.reduce((sum, l) => sum + l.amount_cents, 0)
  const invoice = await Invoice.findByPk(invoiceId)
  const tax = Math.round(subtotal * Number(invoice.tax_rate))

  await invoice.update({
    subtotal_cents: subtotal,
    tax_cents: tax,
    total_cents: subtotal + tax
  })

  return invoice.toJSON()
}
