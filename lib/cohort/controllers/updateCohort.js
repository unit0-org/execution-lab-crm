import { Cohort } from '../models'

// Update an org's cohort with new field values.
export function updateCohort(organizationId, id, data) {
  return Cohort.update(data, {
    where: { id, organization_id: organizationId }
  }).then(() => ({ ok: true }))
}
