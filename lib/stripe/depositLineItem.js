// The payment plan's deposit, priced inline rather than as a second Stripe
// Price: half of the already-discounted total, worked out from the cohort's
// one price. Nothing to keep in sync, and what the portal shows is exactly
// what Stripe charges — for a percentage coupon or a fixed-amount one.
export function depositLineItem(label, amounts) {
  return {
    quantity: 1,
    price_data: {
      currency: amounts.currency,
      unit_amount: amounts.depositCents,
      product_data: { name: `${label} — 50% deposit` }
    }
  }
}
