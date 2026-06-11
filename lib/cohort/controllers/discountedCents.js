// Apply a coupon discount (percent or amount off, in cents) to an amount;
// never below zero. No discount → the amount is returned unchanged.
export function discountedCents(amountCents, discount) {
  if (!discount) return amountCents

  if (discount.amountOff) {
    return Math.max(0, amountCents - discount.amountOff)
  }

  if (discount.percentOff) {
    return Math.round(amountCents * (1 - discount.percentOff / 100))
  }

  return amountCents
}
