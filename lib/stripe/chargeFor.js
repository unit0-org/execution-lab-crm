import { stripe } from './client'

// The charge for a PaymentIntent, retrieving it when it isn't expanded
// (e.g. on webhook events). Returns the charge object, or null.
export function chargeFor(payment) {
  const charge = payment.latest_charge

  if (charge && typeof charge === 'object') return charge

  if (!charge) return null

  return stripe().charges.retrieve(charge)
}
