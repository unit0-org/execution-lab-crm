import { cohortStats, spotsLeft } from '@/lib/cohort/controllers'

// Whether a cohort has no seats left, from live paid head counts.
export async function cohortIsFull(cohort) {
  const stats = await cohortStats()
  const filled = (stats[cohort.id] || { filled: 0 }).filled

  return spotsLeft(cohort.capacity, filled) <= 0
}
