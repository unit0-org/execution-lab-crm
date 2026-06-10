import { cohortPricing, spotsLeft } from '@/lib/cohort/controllers'

// One cohort shaped for a portal card: seats + live Stripe pricing.
export async function toCohortCard(cohort, stats, apiKey, today) {
  const own = stats[cohort.id] || { filled: 0 }
  const pricing = await cohortPricing(cohort, apiKey, today)

  return {
    id: cohort.id,
    label: cohort.label,
    start_date: cohort.start_date,
    status: cohort.status,
    capacity: cohort.capacity,
    spotsLeft: spotsLeft(cohort.capacity, own.filled),
    pricing
  }
}
