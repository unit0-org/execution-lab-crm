import { InvoiceLine } from '../models'
import { recalcTotals } from './recalcTotals'

// Delete a line item and refresh the invoice totals.
export async function removeInvoiceLine(lineId) {
  const line = await InvoiceLine.findByPk(lineId)

  if (!line) return { error: 'Line not found' }

  const invoiceId = line.invoice_id

  await line.destroy()

  return recalcTotals(invoiceId)
}
