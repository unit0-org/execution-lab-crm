import { drawText } from '@/lib/pdf/drawText'
import { drawRect } from '@/lib/pdf/drawRect'
import { palette } from './palette'
import { page, margin, contentRight } from '@/lib/pdf/pdfPage'

export const bandTop = page.height - 72

// Accent header band: seller name on the left, INVOICE on the right.
export function drawBand(ctx, company) {
  drawRect(ctx, {
    x: 0, y: bandTop, width: page.width, height: 72, color: palette.accent
  })
  const white = { color: palette.white, bold: true }

  drawText(ctx, company.legal_name, {
    ...white, x: margin, y: bandTop + 42, size: 18
  })
  drawText(ctx, 'INVOICE', {
    ...white, x: contentRight, y: bandTop + 40, size: 22, align: 'right'
  })
}
