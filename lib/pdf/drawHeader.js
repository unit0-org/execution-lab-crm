import { drawBand, bandTop } from './drawBand'
import { drawSellerInfo } from './drawSellerInfo'
import { drawInvoiceMeta } from './drawInvoiceMeta'

// Header: accent band plus seller and invoice metadata columns.
export function drawHeader(ctx, invoice, company) {
  drawBand(ctx, company)
  drawSellerInfo(ctx, company)
  drawInvoiceMeta(ctx, invoice)
  ctx.y = bandTop - 110
}
