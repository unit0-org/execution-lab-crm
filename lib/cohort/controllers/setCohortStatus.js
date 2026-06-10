import { Cohort } from '../models'

// Move a cohort between draft, open, and closed.
export function setCohortStatus(organizationId, id, status) {
  return Cohort.update({ status }, {
    where: { id, organization_id: organizationId }
  }).then(() => ({ ok: true }))
}
