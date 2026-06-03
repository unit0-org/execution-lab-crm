const emailOf = (charge, payment) =>
  charge?.billing_details?.email || charge?.receipt_email
  || payment.receipt_email || null

// Shape a succeeded PaymentIntent (its charge + any product names) into
// purchase fields. Products come from the Checkout session when there is
// one; otherwise fall back to the payment's own description.
export function toPurchase(payment, charge, products) {
  return {
    stripe_id: payment.id,
    email: emailOf(charge, payment),
    amount_cents: payment.amount || 0,
    currency: payment.currency || null,
    product: products.join(', ') || payment.description || 'Payment',
    status: payment.status || null,
    purchased_at: new Date(payment.created * 1000)
  }
}
