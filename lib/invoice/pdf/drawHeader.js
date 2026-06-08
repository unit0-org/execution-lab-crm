import { drawBrand } from './drawBrand'
import { drawInvoiceMark } from './drawInvoiceMark'

// Header: brand/logo + seller on the left, INVOICE + meta on the right.
// Leaves the cursor below the deeper of the two columns.
export function drawHeader(ctx, invoice, company) {
  const brandEnd = drawBrand(ctx, company)
  const markEnd = drawInvoiceMark(ctx, invoice)

  ctx.y = Math.min(brandEnd, markEnd) - 44
}
