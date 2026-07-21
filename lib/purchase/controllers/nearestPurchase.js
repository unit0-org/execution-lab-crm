const DAY = 24 * 60 * 60 * 1000
const MATCH_WINDOW_DAYS = 30

// A seat can be charged well after sign-up — marked paid, or actually paid,
// days later — so match the charge against whichever known date sits closest:
// when they registered or when they paid. Anchoring only to sign-up made a
// late payment fall outside the window and read as unpaid.
const anchorDates = (registration) =>
  [registration.created_at, registration.paid_at].filter(Boolean)

const gap = (purchase, registration) =>
  Math.min(...anchorDates(registration).map((date) =>
    Math.abs(new Date(purchase.purchased_at) - new Date(date))))

// The registrant's succeeded purchase closest to their sign-up or payment and
// within a month of it — the charge that paid for this seat. The window stops
// an unrelated older purchase by the same contact from being mistaken for it.
export function nearestPurchase(registration, purchases) {
  const mine = purchases
    .filter((p) => p.contact_id === registration.contact_id)
    .filter((p) => gap(p, registration) <= MATCH_WINDOW_DAYS * DAY)
    .sort((a, b) => gap(a, registration) - gap(b, registration))

  return mine[0] || null
}
