import { drawBrand } from './drawBrand'
import { drawInvoiceMark } from './drawInvoiceMark'
import { gradientRule } from './gradientRule'

// Header: brand/logo + seller on the left, INVOICE + meta on the right,
// then the brand gradient divider. Leaves the cursor below the rule.
export function drawHeader(ctx, invoice, company) {
  const brandEnd = drawBrand(ctx, company)
  const markEnd = drawInvoiceMark(ctx, invoice)
  const ruleY = Math.min(brandEnd, markEnd) - 16

  gradientRule(ctx, ruleY)
  ctx.y = ruleY - 28
}
