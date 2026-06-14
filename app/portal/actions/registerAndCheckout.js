import {
  createPendingRegistration, attachCheckoutSession,
  syncRegistrationContact
} from '@/lib/registration/controllers'
import { startCheckout } from '@/lib/portal/startCheckout'

// Record a pending registration, sync it to a CRM contact, then open its
// Stripe Checkout Session.
export async function registerAndCheckout(cohort, data) {
  const reg = await createPendingRegistration(cohort.id, data)

  await syncRegistrationContact(reg.id, cohort)
  const session = await startCheckout(cohort, reg)

  await attachCheckoutSession(reg.id, session.id)

  return { url: session.url }
}
