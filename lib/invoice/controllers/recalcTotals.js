import { Invoice, InvoiceLine } from '../models'

// Recompute an invoice's subtotal and total from its line items.
export async function recalcTotals(invoiceId) {
  const lines = await InvoiceLine.findAll({
    where: { invoice_id: invoiceId }
  })
  const subtotal = lines.reduce((sum, l) => sum + l.amount_cents, 0)
  const invoice = await Invoice.findByPk(invoiceId)
  const total = subtotal + invoice.tax_cents

  await invoice.update({ subtotal_cents: subtotal, total_cents: total })

  return invoice.toJSON()
}
