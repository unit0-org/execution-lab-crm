import { drawLinesHead } from './drawLinesHead'
import { drawLineRow } from './drawLineRow'

// The line-item table: header rule, then one row per item.
export function drawLines(ctx, lines) {
  ctx.y = drawLinesHead(ctx) - 22

  lines.forEach((line) => {
    ctx.y = drawLineRow(ctx, line)
  })

  ctx.y -= 28
}
