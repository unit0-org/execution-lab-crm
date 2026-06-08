import { pen } from './pen'
import { palette } from './palette'
import { drawMetaRows } from './drawMetaRows'
import { contentRight } from '@/lib/pdf/pdfPage'

// Big "INVOICE" title + the meta rows, right-aligned; returns bottom y.
export function drawInvoiceMark(ctx, invoice) {
  const titleY = ctx.y - 38

  pen(ctx, 'INVOICE', {
    x: contentRight, y: titleY, align: 'right', size: 46,
    font: ctx.fonts.black, color: palette.ink
  })

  return drawMetaRows(ctx, invoice, titleY - 30)
}
