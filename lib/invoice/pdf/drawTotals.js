import { totalRow } from './totalRow'
import { drawGrandTotal } from './drawGrandTotal'
import { drawNotes } from './drawNotes'

// Subtotal / tax, an accent grand-total bar, then notes.
export function drawTotals(ctx, invoice) {
  totalRow(ctx, 'Subtotal', invoice.subtotal)
  totalRow(ctx, 'Tax', invoice.tax)
  drawGrandTotal(ctx, invoice.total)
  drawNotes(ctx, invoice.notes)
}
