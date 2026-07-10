import { margin, contentRight } from './pdfPage'
import { palette } from './brandPalette'
import { ensureSpace } from './flowSpace'
import { fitCell, drawCell } from './docTableCell'
import { labelCfg, valueCfg, rowPad } from './docTableCols'

const cellHeight = (cell) => cell.lines.length * cell.cfg.lh

const underline = (ctx) =>
  ctx.page.drawRectangle({
    x: margin, y: ctx.y, width: contentRight - margin, height: 0.6,
    color: palette.hair
  })

// One table row — label | value, top-aligned — over a thin rule, paginating
// when the whole row wouldn't fit on the page.
export function drawTableRow(ctx, [label, value]) {
  const lbl = fitCell(label.toUpperCase(), labelCfg(ctx.fonts))
  const val = fitCell(value || '—', valueCfg(ctx.fonts))
  const body = Math.max(cellHeight(lbl), cellHeight(val))
  const height = rowPad.top + body + rowPad.bottom

  ensureSpace(ctx, height)
  const top = ctx.y - rowPad.top

  drawCell(ctx, lbl, top)
  drawCell(ctx, val, top)
  ctx.y -= height
  underline(ctx)
}
