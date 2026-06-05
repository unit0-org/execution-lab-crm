import { writeLine } from './pdfWrite'

// Subtotal / tax / total and any free-text notes.
export function drawTotals(ctx, invoice) {
  ctx.y = writeLine(ctx, `Subtotal: ${invoice.subtotal}`)
  ctx.y = writeLine(ctx, `Tax: ${invoice.tax}`)
  ctx.y = writeLine(ctx, `Total: ${invoice.total}`, { bold: true, gap: 24 })
  ctx.y = writeLine(ctx, invoice.notes, { size: 10 })
}
