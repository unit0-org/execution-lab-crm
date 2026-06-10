import { cohortStats, registrationPhase } from '@/lib/cohort/controllers'
import { stripeApiKey } from '@/lib/stripe/stripeApiKey'
import { listOpenCohorts } from './listOpenCohorts'
import { toCohortCard } from './toCohortCard'
import { todayIso } from './todayIso'

// Open cohorts for the portal org as display-ready cards (seats +
// live Stripe pricing), soonest start first.
export async function cohortCardData(organizationId) {
  const today = todayIso()
  const cohorts = await listOpenCohorts(organizationId)
  const shown = cohorts.filter((c) => registrationPhase(c, today) !== 'hidden')
  const stats = await cohortStats(organizationId)
  const apiKey = stripeApiKey()

  return Promise.all(
    shown.map((cohort) => toCohortCard(cohort, stats, apiKey, today))
  )
}
