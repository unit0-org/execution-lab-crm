import { pen } from './pen'
import { palette } from './palette'
import { margin } from '@/lib/pdf/pdfPage'

// Draw the "BN <number>" line under the address; return the bottom y.
// Nothing to draw for an empty business number — pass the top y through.
export function drawBillToBn(ctx, businessNumber, top) {
  if (!businessNumber) return top

  const bn = String(businessNumber).replace(/^BN\s*/i, '')

  pen(ctx, `BN ${bn}`, {
    x: margin, y: top - 4, size: 10.5, font: ctx.fonts.mono,
    color: palette.subtle
  })

  return top - 20
}
