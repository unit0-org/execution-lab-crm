import { Cohort } from '../models'

// Create a cohort for an org from validated form data.
export function createCohort(organizationId, data) {
  return Cohort.create({
    organization_id: organizationId,
    ...data
  }).then((row) => ({ ok: true, id: row.id }))
}
