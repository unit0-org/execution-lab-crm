import { cohortStats, spotsLeft } from '@/lib/cohort/controllers'

// Whether a cohort has no seats left, from live paid head counts.
export async function cohortIsFull(organizationId, cohort) {
  const stats = await cohortStats(organizationId)
  const filled = (stats[cohort.id] || { filled: 0 }).filled

  return spotsLeft(cohort.capacity, filled) <= 0
}
