import { drawRect } from './drawRect'
import { palette } from './pdfColor'
import { margin, contentWidth } from './pdfPage'

// Shade every other row for table readability.
export function shadeRow(ctx, index) {
  if (index % 2 === 0) return

  drawRect(ctx, {
    x: margin, y: ctx.y - 6, width: contentWidth, height: 20,
    color: palette.stripe
  })
}
