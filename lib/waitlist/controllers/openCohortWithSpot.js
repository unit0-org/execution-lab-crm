import { Cohort } from '@/lib/cohort/models'
import { cohortStats } from '@/lib/cohort/controllers/cohortStats'
import { spotsLeft } from '@/lib/cohort/controllers/spotsLeft'

const filledFor = (stats, id) => (stats[id] || { filled: 0 }).filled
const byStartDate = (a, b) => (a.start_date < b.start_date ? -1 : 1)

// The earliest open cohort that still has a free seat, or null — the spot
// a freed-up waitlist invite would claim (Story 3.2).
export async function openCohortWithSpot() {
  const cohorts = await Cohort.findAll({
    where: { status: 'open' }
  })
  const stats = await cohortStats()
  const hasSpot = (c) =>
    spotsLeft(c.capacity, filledFor(stats, c.id)) > 0

  return cohorts.map((c) => c.toJSON()).sort(byStartDate).find(hasSpot) || null
}
