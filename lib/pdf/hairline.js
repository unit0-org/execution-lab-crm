import { margin, contentRight } from './pdfPage'
import { palette } from './brandPalette'
import { ensureSpace } from './flowSpace'

// A thin full-width divider at the cursor; advances past it by `gap`.
export function hairline(ctx, gap = 16) {
  ensureSpace(ctx, gap)
  ctx.page.drawRectangle({
    x: margin, y: ctx.y, width: contentRight - margin, height: 0.8,
    color: palette.hairStrong
  })
  ctx.y -= gap
}
