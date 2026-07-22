import { pen } from './pen'
import { palette } from './palette'
import { margin } from '@/lib/pdf/pdfPage'

const addressLines = (text) =>
  String(text || '').split('\n').map((l) => l.trim()).filter(Boolean)

// Draw the bill-to address lines under the email; return the bottom y.
export function drawBillToAddress(ctx, address, top) {
  let y = top

  addressLines(address).forEach((line) => {
    pen(ctx, line, {
      x: margin, y, size: 11, font: ctx.fonts.reg, color: palette.muted
    })
    y -= 14
  })

  return y
}
