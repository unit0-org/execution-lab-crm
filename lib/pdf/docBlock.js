import { margin } from './pdfPage'
import { palette } from './brandPalette'
import { writeParagraph } from './flowParagraph'
import { ensureSpace } from './flowSpace'
import { drawActiveTag } from './docTag'

// One generated offer: an accent tick (with an "ACTIVE" tag when it's the
// one being sold), its multi-line text, then breathing room before the next.
export function drawDocBlock(ctx, block) {
  ensureSpace(ctx, 46)
  ctx.y -= 12
  ctx.page.drawRectangle({
    x: margin, y: ctx.y - 2, width: 22, height: 3, color: palette.accent
  })

  if (block.active) drawActiveTag(ctx)

  ctx.y -= 14
  writeParagraph(ctx, block.text, {
    size: 11, font: ctx.fonts.reg, color: palette.ink, lh: 16
  })
}
