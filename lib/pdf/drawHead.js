import { drawRect } from './drawRect'
import { drawRow } from './drawRow'
import { palette } from './pdfColor'
import { margin, contentWidth } from './pdfPage'

const labels = ['DESCRIPTION', 'QTY', 'UNIT', 'AMOUNT']

// Accent header row for the line-item table.
export function drawHead(ctx) {
  drawRect(ctx, {
    x: margin, y: ctx.y - 5, width: contentWidth, height: 22,
    color: palette.accent
  })
  drawRow(ctx, labels, { bold: true, color: palette.white })
  ctx.y -= 30
}
