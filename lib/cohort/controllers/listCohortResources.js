import { CohortResource } from '../models'

// A cohort's resources, oldest first within each group. The UI groups them
// by session then kind; the order here keeps each group stable.
export function listCohortResources(cohortId) {
  return CohortResource.findAll({
    where: { cohort_id: cohortId },
    order: [['session_label', 'ASC'], ['created_at', 'ASC']]
  }).then((rows) => rows.map((row) => row.toJSON()))
}
