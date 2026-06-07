import { drawText } from './drawText'

// Draw one line at the cursor and return the y for the next line.
export function writeLine(ctx, text, opts = {}) {
  const size = opts.size || 11

  drawText(ctx, text, { ...opts, size, y: ctx.y })

  return ctx.y - (opts.gap || size + 6)
}
