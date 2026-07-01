import { cohortStats } from '@/lib/cohort/controllers'
import { stripeApiKey } from '@/lib/stripe/stripeApiKey'
import { toCohortCard } from './toCohortCard'
import { todayIso } from './todayIso'

// One cohort as a portal display card (seats + live Stripe pricing). A
// valid coupon code reflects in the price and rides the register CTA.
export async function cohortCard(cohort, code) {
  const stats = await cohortStats()

  return toCohortCard(cohort, stats, stripeApiKey(), todayIso(), code)
}
