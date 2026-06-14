import { Cohort } from '../models'
import { cohortStats } from './cohortStats'
import { mergeCohortStats } from './mergeCohortStats'

// All cohorts, newest start first, each with its paid
// head count and revenue.
export async function listCohortsWithStats() {
  const rows = await Cohort.findAll({
    order: [['start_date', 'DESC']]
  })
  const stats = await cohortStats()

  return rows.map((row) => mergeCohortStats(row.toJSON(), stats))
}
