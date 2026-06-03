// Shape a Checkout Session (+ its product names) into purchase fields.
export function toPurchase(session, products) {
  return {
    stripe_id: session.id,
    email: session.customer_details?.email || null,
    amount_cents: session.amount_total || 0,
    currency: session.currency || null,
    product: products.join(', ') || 'Purchase',
    status: session.payment_status || null,
    purchased_at: new Date(session.created * 1000)
  }
}
