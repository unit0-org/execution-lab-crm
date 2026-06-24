import { CohortResource } from '../models'

// Delete a cohort resource by id.
export function removeCohortResource(id) {
  return CohortResource.destroy({ where: { id } }).then(() => ({ ok: true }))
}
