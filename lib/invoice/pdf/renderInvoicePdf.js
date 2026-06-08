import { pdfDoc } from './pdfDoc'
import { drawHeader } from './drawHeader'
import { drawParties } from './drawParties'
import { drawLines } from './drawLines'
import { drawTotals } from './drawTotals'

// Render an invoice to PDF bytes (Buffer). The page is drawn in the
// template's px space, then scaled down to US Letter points.
export async function renderInvoicePdf(invoice, company) {
  const { doc, ctx } = await pdfDoc()

  drawHeader(ctx, invoice, company)
  drawParties(ctx, invoice)
  drawLines(ctx, invoice.lines || [])
  drawTotals(ctx, invoice)
  ctx.page.scale(0.75, 0.75)

  return Buffer.from(await doc.save())
}
