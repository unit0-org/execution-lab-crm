// Keep text to characters the standard PDF font can render.
const clean = (text) => String(text || '').replace(/[^\x20-\x7E]/g, '')

// Draw one line of text and return the y for the next line.
export function writeLine(ctx, text, opts = {}) {
  const size = opts.size || 11
  const font = opts.bold ? ctx.bold : ctx.font

  ctx.page.drawText(clean(text), { x: opts.x || 50, y: ctx.y, size, font })

  return ctx.y - (opts.gap || size + 6)
}
