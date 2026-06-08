import { pen } from './pen'
import { palette } from './palette'
import { margin } from '@/lib/pdf/pdfPage'

const at = (ctx, text, y, font, color, size) =>
  pen(ctx, text, { x: margin, y, size, font, color })

// The muted address lines plus the mono BN; returns the bottom y.
export function drawFromLines(ctx, block, top) {
  let y = top

  block.lines.forEach((text) => {
    at(ctx, text, y, ctx.fonts.reg, palette.muted, 11.5)
    y -= 16
  })

  if (!block.bn) return y

  const bn = String(block.bn).replace(/^BN\s*/i, '')

  at(ctx, `BN ${bn}`, y - 4, ctx.fonts.mono, palette.subtle, 10.5)

  return y - 16
}
