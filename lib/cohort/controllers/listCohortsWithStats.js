import { Cohort } from '../models'
import { cohortStats } from './cohortStats'
import { mergeCohortStats } from './mergeCohortStats'
import { findDeleteBlockers } from './findDeleteBlockers'

// All cohorts, newest start first, each with its paid head count, revenue,
// and `deleteBlocker` — the reason it can't be deleted, or null when it
// can — so the list never offers a delete the server would refuse.
export async function listCohortsWithStats() {
  const rows = await Cohort.findAll({
    order: [['start_date', 'DESC']]
  })
  const stats = await cohortStats()
  const blockers = await findDeleteBlockers()

  return rows.map((row) => ({
    ...mergeCohortStats(row.toJSON(), stats),
    deleteBlocker: blockers[row.id] || null
  }))
}
