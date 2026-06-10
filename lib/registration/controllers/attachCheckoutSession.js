import { Registration } from '@/lib/registration/models'

// Link a registration to the Stripe Checkout Session it kicked off.
export function attachCheckoutSession(registrationId, sessionId) {
  return Registration.update(
    { stripe_session_id: sessionId },
    { where: { id: registrationId } }
  )
}
