import { Cohort } from '@/lib/cohort/models'

// Open cohorts, soonest first (draft/closed never shown).
export function listOpenCohorts() {
  return Cohort.findAll({
    where: { status: 'open' },
    order: [['start_date', 'ASC']]
  }).then((rows) => rows.map((row) => row.toJSON()))
}
