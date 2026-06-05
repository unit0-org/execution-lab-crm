import { InvoiceLine } from '../models'
import { recalcTotals } from './recalcTotals'

const amountFor = (line) =>
  (line.quantity || 1) * (line.unitAmountCents || 0)

// Add a line item to an invoice and refresh its totals.
export async function addInvoiceLine(invoiceId, line) {
  await InvoiceLine.create({
    invoice_id: invoiceId,
    description: line.description || null,
    quantity: line.quantity || 1,
    unit_amount_cents: line.unitAmountCents || 0,
    amount_cents: amountFor(line),
    position: line.position || 0
  })

  return recalcTotals(invoiceId)
}
