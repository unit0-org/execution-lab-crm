import { margin } from './pdfPage'
import { palette } from './brandPalette'
import { writeParagraph } from './flowParagraph'
import { ensureSpace } from './flowSpace'

// One free-text block (e.g. a generated offer): an accent tick, its
// multi-line text, then breathing room before the next.
export function drawDocBlock(ctx, text) {
  ensureSpace(ctx, 46)
  ctx.y -= 12
  ctx.page.drawRectangle({
    x: margin, y: ctx.y - 2, width: 22, height: 3, color: palette.accent
  })
  ctx.y -= 14
  writeParagraph(ctx, text, {
    size: 11, font: ctx.fonts.reg, color: palette.ink, lh: 16
  })
}
