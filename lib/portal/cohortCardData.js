import { cohortStats, registrationPhase } from '@/lib/cohort/controllers'
import { stripeApiKey } from '@/lib/stripe/stripeApiKey'
import { listOpenCohorts } from './listOpenCohorts'
import { toCohortCard } from './toCohortCard'
import { todayIso } from './todayIso'

// Open cohorts for the portal as display-ready cards (seats +
// live Stripe pricing), soonest start first.
export async function cohortCardData() {
  const today = todayIso()
  const cohorts = await listOpenCohorts()
  const shown = cohorts.filter((c) => registrationPhase(c, today) !== 'hidden')
  const stats = await cohortStats()
  const apiKey = stripeApiKey()

  return Promise.all(
    shown.map((cohort) => toCohortCard(cohort, stats, apiKey, today))
  )
}
