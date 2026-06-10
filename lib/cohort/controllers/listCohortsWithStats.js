import { Cohort } from '../models'
import { cohortStats } from './cohortStats'
import { mergeCohortStats } from './mergeCohortStats'

// All cohorts for an org, newest start first, each with its paid
// head count and revenue.
export async function listCohortsWithStats(organizationId) {
  const rows = await Cohort.findAll({
    where: { organization_id: organizationId },
    order: [['start_date', 'DESC']]
  })
  const stats = await cohortStats(organizationId)

  return rows.map((row) => mergeCohortStats(row.toJSON(), stats))
}
