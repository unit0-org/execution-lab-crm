import { drawRect } from '@/lib/pdf/drawRect'
import { palette } from './palette'
import { margin, contentWidth } from '@/lib/pdf/pdfPage'

// Shade every other row for table readability (text vertically centered).
export function shadeRow(ctx, index) {
  if (index % 2 === 0) return

  drawRect(ctx, {
    x: margin, y: ctx.y - 7, width: contentWidth, height: 22,
    color: palette.stripe
  })
}
