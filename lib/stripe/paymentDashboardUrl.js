// A Stripe dashboard deep-link for a real charge/payment id (ch_/py_/pi_),
// or null for a missing or synthetic id (e.g. an e-transfer pseudo-id) that
// has no Stripe transaction to open.
export function paymentDashboardUrl(stripeId) {
  const isRealStripeId = /^(ch_|py_|pi_)/.test(stripeId || '')

  if (!isRealStripeId) return null

  return `https://dashboard.stripe.com/payments/${stripeId}`
}
