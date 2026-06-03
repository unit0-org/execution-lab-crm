const metaEmailOf = (source) =>
  source?.metadata?.email || source?.metadata?.bookerEmail || null

const emailOf = (charge, session, intent) =>
  charge.billing_details?.email
  || charge.receipt_email
  || session?.customer_details?.email
  || metaEmailOf(intent)
  || metaEmailOf(charge)
  || null

// Shape a succeeded charge (+ its Checkout session and PaymentIntent) into
// purchase fields: product names from the session, the buyer email from the
// charge, session, or PaymentIntent metadata (cal.com / Luma).
export function toPurchase(charge, session, intent, products) {
  return {
    stripe_id: charge.id,
    email: emailOf(charge, session, intent),
    amount_cents: charge.amount || 0,
    currency: charge.currency || null,
    product: products.join(', ') || charge.description || 'Payment',
    status: charge.status || null,
    purchased_at: new Date(charge.created * 1000)
  }
}
