import { stripe } from './client'

// The Checkout Session that produced a PaymentIntent, if any.
export async function sessionForPayment(paymentIntentId, apiKey) {
  const sessions = await stripe(apiKey).checkout.sessions.list({
    payment_intent: paymentIntentId, limit: 1
  })

  return sessions.data[0] || null
}
