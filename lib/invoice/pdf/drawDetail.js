import { pen } from './pen'
import { palette } from './palette'
import { lineCols } from './pdfLineCols'

// The optional gray sub-description under a line item's description.
export function drawDetail(ctx, detail, y) {
  if (!detail) return

  pen(ctx, detail, {
    x: lineCols.desc, y, size: 11, font: ctx.fonts.reg, color: palette.muted
  })
}
