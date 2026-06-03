const emailOf = (charge, session) =>
  charge.billing_details?.email
  || charge.receipt_email
  || session?.customer_details?.email
  || null

// Shape a succeeded charge (+ its Checkout session, if any) into purchase
// fields: the product names and a fallback email come from the session.
export function toPurchase(charge, session, products) {
  return {
    stripe_id: charge.id,
    email: emailOf(charge, session),
    amount_cents: charge.amount || 0,
    currency: charge.currency || null,
    product: products.join(', ') || charge.description || 'Payment',
    status: charge.status || null,
    purchased_at: new Date(charge.created * 1000)
  }
}
