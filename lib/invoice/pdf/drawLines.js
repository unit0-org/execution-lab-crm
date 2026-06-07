import { drawHead } from './drawHead'
import { drawRow } from './drawRow'
import { shadeRow } from './shadeRow'
import { palette } from './palette'

const cells = (line) =>
  [line.description || '', String(line.quantity), line.unitAmount, line.amount]

// The invoice line items as a striped table with an accent header.
export function drawLines(ctx, lines) {
  drawHead(ctx)

  lines.forEach((line, i) => {
    shadeRow(ctx, i)
    drawRow(ctx, cells(line), { color: palette.ink })
    ctx.y -= 24
  })

  ctx.y -= 10
}
