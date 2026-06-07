import { palette } from './pdfColor'

// Draw a filled rectangle (used for bands, table rows, totals).
export function drawRect(ctx, { x, y, width, height, color }) {
  ctx.page.drawRectangle({
    x, y, width, height, color: color || palette.stripe
  })
}
