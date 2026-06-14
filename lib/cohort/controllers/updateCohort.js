import { Cohort } from '../models'

// Update a cohort with new field values.
export function updateCohort(id, data) {
  return Cohort.update(data, {
    where: { id }
  }).then(() => ({ ok: true }))
}
