import { pdfDoc } from './pdfDoc'
import { drawHeader } from './drawHeader'
import { drawParties } from './drawParties'
import { drawLines } from './drawLines'
import { drawTotals } from './drawTotals'

// Render an invoice (formatted money + lines) to PDF bytes (Buffer).
export async function renderInvoicePdf(invoice, company) {
  const { doc, ctx } = await pdfDoc()

  drawHeader(ctx, invoice, company)
  drawParties(ctx, invoice)
  drawLines(ctx, invoice.lines || [])
  drawTotals(ctx, invoice)

  return Buffer.from(await doc.save())
}
