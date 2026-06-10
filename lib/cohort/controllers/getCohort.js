import { Cohort } from '../models'

// One cohort for an org as a plain object, or null when not found.
export function getCohort(organizationId, id) {
  return Cohort.findOne({
    where: { id, organization_id: organizationId }
  }).then((row) => (row ? row.toJSON() : null))
}
