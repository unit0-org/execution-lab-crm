import { cohortPricing, spotsLeft, registrationPhase }
  from '@/lib/cohort/controllers'

// One cohort shaped for a portal card: seats + live Stripe pricing.
export async function toCohortCard(cohort, stats, apiKey, today) {
  const own = stats[cohort.id] || { filled: 0 }
  const pricing = await cohortPricing(cohort, apiKey, today)

  return {
    id: cohort.id,
    slug: cohort.slug,
    label: cohort.label,
    start_date: cohort.start_date,
    status: cohort.status,
    capacity: cohort.capacity,
    spotsLeft: spotsLeft(cohort.capacity, own.filled),
    phase: registrationPhase(cohort, today),
    pricing
  }
}
