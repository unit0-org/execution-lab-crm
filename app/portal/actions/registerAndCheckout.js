import {
  createPendingRegistration, attachCheckoutSession
} from '@/lib/registration/controllers'
import { startCheckout } from '@/lib/portal/startCheckout'

// Record a pending registration and open its Stripe Checkout Session.
export async function registerAndCheckout(orgId, cohort, data) {
  const reg = await createPendingRegistration(orgId, cohort.id, data)
  const session = await startCheckout(orgId, cohort, reg)

  await attachCheckoutSession(reg.id, session.id)

  return { url: session.url }
}
