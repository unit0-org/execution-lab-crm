import { pen } from './pen'
import { palette } from './palette'
import { pdfMoney } from './pdfMoney'
import { drawDetail } from './drawDetail'
import { rowHairline } from './rowHairline'
import { lineCols } from './pdfLineCols'

const num = (ctx, value, x, y, font, color) =>
  pen(ctx, String(value), { x, y, align: 'right', size: 13, font, color })

// One line-item row (description + optional detail + numbers); returns
// the next row's top y.
export function drawLineRow(ctx, line) {
  const top = ctx.y
  const f = ctx.fonts
  const unit = pdfMoney(line.unitAmountCents)
  const amount = pdfMoney(line.amountCents)

  pen(ctx, line.description || '', { x: lineCols.desc, y: top, size: 13,
    font: f.reg, color: palette.ink })
  num(ctx, line.quantity, lineCols.qty, top, f.mono, palette.muted)
  num(ctx, unit, lineCols.unit, top, f.mono, palette.muted)
  num(ctx, amount, lineCols.amount, top, f.monoBold, palette.ink)
  drawDetail(ctx, line.detail, top - 16)

  const end = line.detail ? top - 32 : top - 16

  return rowHairline(ctx, end) - 18
}
