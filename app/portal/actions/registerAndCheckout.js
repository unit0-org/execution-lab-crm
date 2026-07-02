import {
  createPendingRegistration, attachCheckoutSession,
  syncRegistrationContact, trySendPaymentInstructions
} from '@/lib/registration/controllers'
import { startCheckout } from '@/lib/portal/startCheckout'

// Record a pending registration, sync it to a CRM contact, email the pay
// link, then open its Stripe Checkout Session.
export async function registerAndCheckout(cohort, data) {
  const reg = await createPendingRegistration(cohort.id, data)

  await syncRegistrationContact(reg.id, cohort)
  const session = await startCheckout(cohort, reg)

  await attachCheckoutSession(reg.id, session.id)
  await trySendPaymentInstructions(reg, cohort)

  return { url: session.url }
}
