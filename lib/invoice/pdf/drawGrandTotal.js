import { drawRect } from '@/lib/pdf/drawRect'
import { totalRow, labelX } from './totalRow'
import { palette } from './palette'
import { contentRight } from '@/lib/pdf/pdfPage'

const barX = labelX - 52

// Accent bar behind the grand-total row.
export function drawGrandTotal(ctx, total) {
  drawRect(ctx, {
    x: barX, y: ctx.y - 7, width: contentRight - barX + 5,
    height: 24, color: palette.accent
  })
  totalRow(ctx, 'TOTAL', total, { color: palette.white, bold: true, gap: 34 })
}
