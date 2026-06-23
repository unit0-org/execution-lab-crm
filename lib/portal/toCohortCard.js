import {
  cohortPricing, spotsLeft, registrationPhase,
  inWindowRegistrationCount, opensOn
} from '@/lib/cohort/controllers'

// One cohort shaped for a portal card: seats + live Stripe pricing. The
// in-window seat count (only meaningful once registration is open) decides
// whether the early-bird reward still applies.
export async function toCohortCard(cohort, stats, apiKey, today) {
  const own = stats[cohort.id] || { filled: 0 }
  const phase = registrationPhase(cohort, today)
  const inWindow =
    phase === 'register' ? await inWindowRegistrationCount(cohort) : 0
  const pricing = await cohortPricing(cohort, apiKey, today, inWindow)

  return {
    id: cohort.id,
    slug: cohort.slug,
    label: cohort.label,
    start_date: cohort.start_date,
    opensAt: opensOn(cohort),
    status: cohort.status,
    capacity: cohort.capacity,
    spotsLeft: spotsLeft(cohort.capacity, own.filled),
    phase,
    pricing
  }
}
