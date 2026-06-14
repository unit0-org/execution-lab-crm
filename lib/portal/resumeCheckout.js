import { getRegistration, attachCheckoutSession }
  from '@/lib/registration/controllers'
import { getCohort } from '@/lib/cohort/controllers'
import { startCheckout } from './startCheckout'

// Mint a fresh Stripe Checkout Session for a still-pending registration
// so a nudged registrant can finish paying. Null when missing or paid.
export async function resumeCheckout(registrationId) {
  const reg = await getRegistration(registrationId)

  if (!reg || reg.status === 'paid') return null

  const cohort = await getCohort(reg.cohort_id)

  if (!cohort) return null

  const session = await startCheckout(cohort, reg)

  await attachCheckoutSession(reg.id, session.id)

  return session.url
}
