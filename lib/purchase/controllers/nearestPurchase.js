const DAY = 24 * 60 * 60 * 1000
const MATCH_WINDOW_DAYS = 30

const gap = (purchase, registration) =>
  Math.abs(
    new Date(purchase.purchased_at) - new Date(registration.created_at)
  )

// The registrant's succeeded purchase closest to their sign-up and within a
// month of it — the charge that paid for this seat. The window stops an
// unrelated older purchase by the same contact from being mistaken for it.
export function nearestPurchase(registration, purchases) {
  const mine = purchases
    .filter((p) => p.contact_id === registration.contact_id)
    .filter((p) => gap(p, registration) <= MATCH_WINDOW_DAYS * DAY)
    .sort((a, b) => gap(a, registration) - gap(b, registration))

  return mine[0] || null
}
