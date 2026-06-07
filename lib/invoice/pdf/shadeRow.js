import { drawRect } from '@/lib/pdf/drawRect'
import { palette } from './palette'
import { margin, contentWidth } from '@/lib/pdf/pdfPage'

// Shade every other row for table readability.
export function shadeRow(ctx, index) {
  if (index % 2 === 0) return

  drawRect(ctx, {
    x: margin, y: ctx.y - 6, width: contentWidth, height: 20,
    color: palette.stripe
  })
}
