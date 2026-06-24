import { CohortFolder } from '../models'

// A cohort's folders, oldest first, each with its resources. The view
// groups a folder's resources by kind.
export function listCohortFolders(cohortId) {
  return CohortFolder.findAll({
    where: { cohort_id: cohortId },
    include: [{ association: 'resource' }],
    order: [['created_at', 'ASC']]
  }).then((rows) => rows.map((row) => row.toJSON()))
}
