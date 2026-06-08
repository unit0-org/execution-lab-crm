import { pen } from './pen'
import { palette } from './palette'
import { contentRight } from '@/lib/pdf/pdfPage'

const LX = contentRight - 220

const currencyCode = (invoice) =>
  (invoice.currency || 'cad').toUpperCase()

// The grand-total row: a rule, the TOTAL label, and a large mono amount.
export function drawGrandTotal(ctx, invoice, top) {
  ctx.page.drawRectangle({
    x: LX, y: top + 6, width: contentRight - LX, height: 1.5,
    color: palette.hairStrong
  })

  const y = top - 18

  pen(ctx, 'TOTAL', { x: LX, y: y + 4, size: 8.5, font: ctx.fonts.semi,
    color: palette.subtle })
  pen(ctx, invoice.total, { x: contentRight - 36, y, align: 'right',
    size: 26, font: ctx.fonts.monoBold, color: palette.ink })
  pen(ctx, currencyCode(invoice), { x: contentRight, y, align: 'right',
    size: 10, font: ctx.fonts.semi, color: palette.subtle })
}
