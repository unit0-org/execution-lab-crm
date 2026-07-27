const addAmount = (total, purchase) => total + (purchase.amount_cents || 0)

// What Stripe actually captured for one seat, across every charge behind
// it. Null — not zero — when nothing was captured, so an unpaid seat stays
// distinguishable from a comp seat charged $0.
export function sumChargedCents(purchases) {
  if (!purchases.length) return null

  return purchases.reduce(addAmount, 0)
}
