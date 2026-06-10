import { Cohort } from '@/lib/cohort/models'

// Open cohorts for the org, soonest first (draft/closed never shown).
export function listOpenCohorts(organizationId) {
  return Cohort.findAll({
    where: { organization_id: organizationId, status: 'open' },
    order: [['start_date', 'ASC']]
  }).then((rows) => rows.map((row) => row.toJSON()))
}
