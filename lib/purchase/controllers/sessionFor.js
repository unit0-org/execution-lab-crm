import { sessionForPayment } from '@/lib/stripe/sessionForPayment'

// The checkout session behind a charge's payment intent, if any.
export function sessionFor(charge, apiKey) {
  if (!charge.payment_intent) return null

  return sessionForPayment(charge.payment_intent, apiKey)
}
