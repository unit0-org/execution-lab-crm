import { palette } from './brandPalette'
import { writeLine } from './flowText'
import { hairline } from './hairline'
import { ensureSpace } from './flowSpace'

// A section heading: extra top space, an accent title, then a rule. Kept on
// one page with the first row that follows it.
export function drawSectionHeading(ctx, text) {
  ensureSpace(ctx, 60)
  ctx.y -= 16
  writeLine(ctx, text.toUpperCase(), {
    size: 12, font: ctx.fonts.bold, color: palette.accent, lh: 18
  })
  hairline(ctx, 14)
}
