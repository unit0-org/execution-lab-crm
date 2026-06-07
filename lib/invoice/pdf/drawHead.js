import { drawRect } from '@/lib/pdf/drawRect'
import { drawRow } from './drawRow'
import { palette } from './palette'
import { margin, contentWidth } from '@/lib/pdf/pdfPage'

const labels = ['DESCRIPTION', 'QTY', 'UNIT', 'AMOUNT']

// Accent header row for the line-item table (text vertically centered).
export function drawHead(ctx) {
  drawRect(ctx, {
    x: margin, y: ctx.y - 7, width: contentWidth, height: 22,
    color: palette.accent
  })
  drawRow(ctx, labels, { bold: true, color: palette.white })
  ctx.y -= 30
}
