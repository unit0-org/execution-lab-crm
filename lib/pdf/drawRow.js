import { drawText } from './drawText'
import { cols } from './tableLayout'

// Draw one table row: 4 cell strings aligned to the column anchors.
export function drawRow(ctx, cells, opts = {}) {
  cells.forEach((text, i) => {
    drawText(ctx, text, {
      x: cols[i].x, y: ctx.y, align: cols[i].align,
      size: opts.size || 10, bold: opts.bold, color: opts.color
    })
  })
}
