import { margin } from './pdfPage'
import { palette } from './brandPalette'

const LABEL = 'ACTIVE'
const size = 7
const padX = 5

// A small filled accent pill reading "ACTIVE", drawn beside a block's tick
// to flag a generated offer the member is currently selling.
export function drawActiveTag(ctx) {
  const width = ctx.fonts.mono.widthOfTextAtSize(LABEL, size) + padX * 2
  const x = margin + 32

  ctx.page.drawRectangle({
    x, y: ctx.y - 6, width, height: 13, color: palette.accent
  })
  ctx.page.drawText(LABEL, {
    x: x + padX, y: ctx.y - 2, size, font: ctx.fonts.mono,
    color: palette.white
  })
}
