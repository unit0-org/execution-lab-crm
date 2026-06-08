import { pen } from './pen'
import { palette } from './palette'
import { fromBlock } from './fromBlock'
import { drawFromLines } from './drawFromLines'
import { margin } from '@/lib/pdf/pdfPage'

// Logo + seller "from" block (left column); returns the bottom y.
export function drawBrand(ctx, company) {
  const block = fromBlock(company)

  ctx.page.drawImage(ctx.logo, {
    x: margin, y: ctx.y - 64, width: 88, height: 64
  })

  const nameY = ctx.y - 64 - 22

  pen(ctx, block.name, {
    x: margin, y: nameY, size: 12, font: ctx.fonts.bold, color: palette.ink
  })

  return drawFromLines(ctx, block, nameY - 16)
}
