import { pen } from './pen'
import { palette } from './palette'
import { pdfMoney } from './pdfMoney'
import { gstLabel } from './gstLabel'
import { drawGrandTotal } from './drawGrandTotal'
import { contentRight } from '@/lib/pdf/pdfPage'

const LX = contentRight - 220

function totalRow(ctx, label, value, y) {
  pen(ctx, label, { x: LX, y, size: 11.5, font: ctx.fonts.semi,
    color: palette.muted })
  pen(ctx, value, { x: contentRight, y, align: 'right', size: 11.5,
    font: ctx.fonts.mono, color: palette.ink })
}

// Subtotal, GST, then the big grand total.
export function drawTotals(ctx, invoice) {
  const top = ctx.y

  totalRow(ctx, 'Subtotal', pdfMoney(invoice.subtotal_cents), top)
  totalRow(ctx, gstLabel(invoice), pdfMoney(invoice.tax_cents), top - 20)
  drawGrandTotal(ctx, invoice, top - 42)
}
