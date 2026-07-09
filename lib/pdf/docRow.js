import { palette } from './brandPalette'
import { writeLine } from './flowText'
import { writeParagraph } from './flowParagraph'
import { ensureSpace } from './flowSpace'

const drawLabel = (ctx, label) => {
  if (!label) return

  writeLine(ctx, label.toUpperCase(), {
    size: 8.5, font: ctx.fonts.mono, color: palette.subtle, lh: 14
  })
}

// A label/value pair: a mono uppercase label over its wrapped value.
export function drawDocRow(ctx, row) {
  ensureSpace(ctx, 34)
  ctx.y -= 6
  drawLabel(ctx, row.label)
  writeParagraph(ctx, row.value || '—', {
    size: 11, font: ctx.fonts.reg, color: palette.ink, lh: 16
  })
}
