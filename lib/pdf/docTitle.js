import { margin } from './pdfPage'
import { palette } from './brandPalette'
import { writeLine } from './flowText'
import { hairline } from './hairline'

// The cover block: brand logo, product kicker, the document title, and its
// subtitle (e.g. version) over a rule.
export function drawDocTitle(ctx, doc) {
  ctx.page.drawImage(ctx.logo, {
    x: margin, y: ctx.y - 42, width: 58, height: 42
  })
  ctx.y -= 60
  writeLine(ctx, doc.kicker || '', {
    size: 9.5, font: ctx.fonts.mono, color: palette.subtle, lh: 16
  })
  writeLine(ctx, doc.title, {
    size: 24, font: ctx.fonts.black, color: palette.ink, lh: 32
  })
  writeLine(ctx, doc.subtitle, {
    size: 11, font: ctx.fonts.mono, color: palette.accent, lh: 22
  })

  if (doc.dateline)
    writeLine(ctx, doc.dateline, {
      size: 9, font: ctx.fonts.mono, color: palette.subtle, lh: 18
    })

  hairline(ctx, 12)
}
