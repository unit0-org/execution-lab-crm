import { margin } from './pdfPage'
import { ensureSpace } from './flowSpace'

// Draw one pre-fitted line at the cursor, then advance it down by the line
// height, spilling to a new page when the bottom margin is reached.
export function writeLine(ctx, text, opts) {
  const lh = opts.lh || opts.size * 1.45

  ensureSpace(ctx, lh)
  ctx.page.drawText(text, {
    x: opts.x || margin, y: ctx.y - opts.size,
    size: opts.size, font: opts.font, color: opts.color
  })
  ctx.y -= lh
}
