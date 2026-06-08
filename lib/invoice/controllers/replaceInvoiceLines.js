import { InvoiceLine } from '../models'
import { parseAmountCents } from './parseAmountCents'
import { recalcTotals } from './recalcTotals'

const toRow = (invoiceId) => (line, position) => {
  const quantity = Number(line.quantity) || 1
  const unit = parseAmountCents(line.unitAmount)

  return {
    invoice_id: invoiceId,
    description: line.description || null,
    detail: line.detail || null,
    quantity,
    unit_amount_cents: unit,
    amount_cents: quantity * unit,
    position
  }
}

// Replace all of an invoice's line items, then refresh its totals.
export async function replaceInvoiceLines(invoiceId, lines) {
  await InvoiceLine.destroy({ where: { invoice_id: invoiceId } })
  await InvoiceLine.bulkCreate(lines.map(toRow(invoiceId)))

  return recalcTotals(invoiceId)
}
