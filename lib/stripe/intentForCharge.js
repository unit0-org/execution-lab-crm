import { stripe } from './client'

// The PaymentIntent behind a charge — its metadata (cal.com bookerEmail,
// Luma email) is the buyer email when there's no Checkout session.
// Resilient: null when there's no intent or the key can't read it.
export async function intentForCharge(charge) {
  if (!charge.payment_intent) return null

  try {
    return await stripe().paymentIntents.retrieve(charge.payment_intent)
  } catch {
    return null
  }
}
