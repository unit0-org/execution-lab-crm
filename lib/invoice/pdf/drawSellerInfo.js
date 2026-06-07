import { writeLine } from '@/lib/pdf/pdfWrite'
import { palette } from './palette'
import { margin } from '@/lib/pdf/pdfPage'
import { bandTop } from './drawBand'
import { sellerLines } from './sellerLines'

const small = { x: margin, size: 10, color: palette.muted }

// Seller contact + full address under the band; returns its end y.
export function drawSellerInfo(ctx, company) {
  ctx.y = bandTop - 22

  for (const line of sellerLines(company)) {
    ctx.y = writeLine(ctx, line, small)
  }

  return ctx.y
}
