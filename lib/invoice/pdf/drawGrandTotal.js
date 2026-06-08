import { pen } from './pen'
import { palette } from './palette'
import { pdfMoney } from './pdfMoney'
import { contentRight } from '@/lib/pdf/pdfPage'

const LX = contentRight - 300

const currencyCode = (invoice) =>
  (invoice.currency || 'cad').toUpperCase()

// The grand-total row: a rule, the TOTAL label, and a large mono amount.
export function drawGrandTotal(ctx, invoice, top) {
  ctx.page.drawRectangle({
    x: LX, y: top + 6, width: contentRight - LX, height: 1.5,
    color: palette.hairStrong
  })

  const y = top - 18

  pen(ctx, 'TOTAL', { x: LX, y: y + 5, size: 9.5, font: ctx.fonts.semi,
    color: palette.subtle })
  pen(ctx, pdfMoney(invoice.total_cents), { x: contentRight - 42, y,
    align: 'right', size: 30, font: ctx.fonts.monoBold, color: palette.ink })
  pen(ctx, currencyCode(invoice), { x: contentRight, y, align: 'right',
    size: 11, font: ctx.fonts.semi, color: palette.subtle })
}
