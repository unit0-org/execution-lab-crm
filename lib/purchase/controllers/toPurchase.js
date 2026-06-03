const emailOf = (charge) =>
  charge.billing_details?.email
  || charge.receipt_email
  || charge.customer?.email
  || null

// Shape a succeeded charge (+ any Checkout product names) into purchase
// fields. Products come from the Checkout session when there is one;
// otherwise fall back to the charge's own description.
export function toPurchase(charge, products) {
  return {
    stripe_id: charge.id,
    email: emailOf(charge),
    amount_cents: charge.amount || 0,
    currency: charge.currency || null,
    product: products.join(', ') || charge.description || 'Payment',
    status: charge.status || null,
    purchased_at: new Date(charge.created * 1000)
  }
}
