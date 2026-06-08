// Keep printable Latin + common punctuation; drop unsupported glyphs.
const clean = (s) =>
  String(s ?? '').replace(/[^ -ɏ‐-‧]/g, '')

const startX = (o) => {
  if (o.align !== 'right') return o.x

  return o.x - o.font.widthOfTextAtSize(clean(o.text), o.size)
}

// Draw a string at an absolute spot with an explicit font, color, align.
export function pen(ctx, text, o) {
  const size = o.size || 11

  ctx.page.drawText(clean(text), {
    x: startX({ ...o, text, size }), y: o.y, size,
    font: o.font, color: o.color
  })
}
