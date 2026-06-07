import { writeLine } from './pdfWrite'
import { palette } from './pdfColor'
import { margin } from './pdfPage'
import { bandTop } from './drawBand'

const small = { x: margin, size: 10, color: palette.muted }

// Seller contact details under the band, left column.
export function drawSellerInfo(ctx, company) {
  ctx.y = bandTop - 22

  ctx.y = writeLine(ctx, company.email, small)
  ctx.y = writeLine(ctx, company.address_line1, small)
  ctx.y = writeLine(ctx, company.tax_id, small)
}
