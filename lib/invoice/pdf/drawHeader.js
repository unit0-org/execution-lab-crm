import { drawBand } from './drawBand'
import { drawSellerInfo } from './drawSellerInfo'
import { drawInvoiceMeta } from './drawInvoiceMeta'

// Header: accent band plus seller and invoice metadata columns. Bill-to
// starts below whichever column runs deeper.
export function drawHeader(ctx, invoice, company) {
  drawBand(ctx, company)

  const sellerEnd = drawSellerInfo(ctx, company)
  const metaEnd = drawInvoiceMeta(ctx, invoice)

  ctx.y = Math.min(sellerEnd, metaEnd) - 26
}
