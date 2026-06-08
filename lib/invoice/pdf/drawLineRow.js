import { pen } from './pen'
import { palette } from './palette'
import { drawDetail } from './drawDetail'
import { rowHairline } from './rowHairline'
import { lineCols } from './pdfLineCols'

const num = (ctx, value, x, y, font, color) =>
  pen(ctx, String(value), { x, y, align: 'right', size: 12, font, color })

// One line-item row (description + optional detail + numbers); returns
// the next row's top y.
export function drawLineRow(ctx, line) {
  const top = ctx.y
  const f = ctx.fonts

  pen(ctx, line.description || '', { x: lineCols.desc, y: top, size: 12.5,
    font: f.reg, color: palette.ink })
  num(ctx, line.quantity, lineCols.qty, top, f.mono, palette.muted)
  num(ctx, line.unitAmount, lineCols.unit, top, f.mono, palette.muted)
  num(ctx, line.amount, lineCols.amount, top, f.monoBold, palette.ink)
  drawDetail(ctx, line.detail, top - 13)

  const end = line.detail ? top - 26 : top - 13

  return rowHairline(ctx, end) - 13
}
