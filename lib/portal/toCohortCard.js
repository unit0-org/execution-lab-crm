import {
  cohortPricing, spotsLeft, registrationPhase,
  opensOn, closesOn, HOLD_HOURS
} from '@/lib/cohort/controllers'
import { cohortPlanTerms } from './cohortPlanTerms'

// One cohort shaped for a portal card: seats + live Stripe pricing. The
// window phase decides both the card's state and whether the early-bird
// reward still applies.
export async function toCohortCard(cohort, stats, apiKey, today, code) {
  const own = stats[cohort.id] || { filled: 0 }
  const phase = registrationPhase(cohort, today)
  const pricing = await cohortPricing(cohort, apiKey, today, code)

  return {
    id: cohort.id,
    slug: cohort.slug,
    label: cohort.label,
    start_date: cohort.start_date,
    opensAt: opensOn(cohort), closesAt: closesOn(cohort),
    status: cohort.status,
    capacity: cohort.capacity,
    spotsLeft: spotsLeft(cohort.capacity, own.filled),
    phase,
    pricing,
    plan: cohortPlanTerms(cohort, pricing),
    couponCode: code,
    holdHours: HOLD_HOURS
  }
}
