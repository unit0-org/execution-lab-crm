import { black } from './pdfColor'

// Keep printable Latin text (incl. accents); drop control/other glyphs the
// embedded font may not cover.
const clean = (text) =>
  String(text || '').replace(/[^ -~ -ɏ]/g, '')

const startX = (ctx, text, opts) => {
  const font = opts.bold ? ctx.bold : ctx.font

  if (opts.align !== 'right') return opts.x || 50

  return opts.x - font.widthOfTextAtSize(clean(text), opts.size || 11)
}

// Draw text at an absolute position; supports right alignment + color.
export function drawText(ctx, text, opts = {}) {
  const size = opts.size || 11
  const font = opts.bold ? ctx.bold : ctx.font

  ctx.page.drawText(clean(text), {
    x: startX(ctx, text, opts), y: opts.y, size, font,
    color: opts.color || black
  })
}
