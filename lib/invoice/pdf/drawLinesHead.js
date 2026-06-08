import { pen } from './pen'
import { palette } from './palette'
import { lineCols } from './pdfLineCols'
import { margin, contentRight } from '@/lib/pdf/pdfPage'

const CELLS = [
  { key: 'desc', text: 'DESCRIPTION' },
  { key: 'qty', text: 'QTY', align: 'right' },
  { key: 'unit', text: 'UNIT', align: 'right' },
  { key: 'amount', text: 'AMOUNT', align: 'right' }
]

// The table header row + underline; returns the y where rows begin.
export function drawLinesHead(ctx) {
  const y = ctx.y

  CELLS.forEach((c) =>
    pen(ctx, c.text, { x: lineCols[c.key], y, align: c.align, size: 8,
      font: ctx.fonts.semi, color: palette.subtle }))
  ctx.page.drawRectangle({ x: margin, y: y - 9, width: contentRight - margin,
    height: 1.5, color: palette.hairStrong })

  return y - 9
}
