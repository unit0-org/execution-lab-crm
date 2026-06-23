import { Cohort } from '../models'
import { cohortStats } from './cohortStats'
import { cohortSeats } from './cohortSeats'

// Open cohorts with their seat counts, soonest first — the choices when
// accepting someone off the waitlist into a cohort.
export async function listOpenCohortSeats() {
  const rows = await Cohort.scope('open').findAll({
    order: [['start_date', 'ASC']]
  })
  const stats = await cohortStats()

  return rows.map((row) => cohortSeats(row.toJSON(), stats))
}
