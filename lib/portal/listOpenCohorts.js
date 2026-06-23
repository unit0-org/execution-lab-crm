import { Cohort } from '@/lib/cohort/models'

// Open cohorts, soonest first (draft/closed never shown).
export function listOpenCohorts() {
  return Cohort.scope('open').findAll({
    order: [['start_date', 'ASC']]
  }).then((rows) => rows.map((row) => row.toJSON()))
}
