import { cohortStats } from '@/lib/cohort/controllers'
import { stripeApiKey } from '@/lib/stripe/stripeApiKey'
import { toCohortCard } from './toCohortCard'
import { todayIso } from './todayIso'

// One cohort as a portal display card (seats + live Stripe pricing).
export async function cohortCard(cohort) {
  const stats = await cohortStats()

  return toCohortCard(cohort, stats, stripeApiKey(), todayIso())
}
