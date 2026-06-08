import { palette } from './palette'
import { margin, contentRight } from '@/lib/pdf/pdfPage'

// A thin divider under a table row; returns the y it was drawn at.
export function rowHairline(ctx, y) {
  ctx.page.drawRectangle({
    x: margin, y, width: contentRight - margin, height: 0.8,
    color: palette.hair
  })

  return y
}
