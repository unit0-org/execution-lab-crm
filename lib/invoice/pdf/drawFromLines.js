import { pen } from './pen'
import { palette } from './palette'
import { margin } from '@/lib/pdf/pdfPage'

const at = (ctx, text, y, font, color, size) =>
  pen(ctx, text, { x: margin, y, size, font, color })

// The muted address lines plus the mono BN; returns the bottom y.
export function drawFromLines(ctx, block, top) {
  let y = top

  block.lines.forEach((text) => {
    at(ctx, text, y, ctx.fonts.reg, palette.muted, 10.5)
    y -= 14
  })

  if (!block.bn) return y

  at(ctx, `BN ${block.bn}`, y - 2, ctx.fonts.mono, palette.subtle, 10)

  return y - 16
}
