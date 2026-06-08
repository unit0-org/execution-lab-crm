import { buildInvoiceCode } from './buildInvoiceCode'

// Invoice code for a Stripe purchase, dated to when it was charged.
export function chargeInvoiceCode(purchase) {
  const at = new Date(purchase.purchased_at || Date.now())

  return buildInvoiceCode(at.toISOString().slice(0, 10), at)
}
