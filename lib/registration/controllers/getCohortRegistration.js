import { Registration } from '@/lib/registration/models'

// One registration in a cohort, scoped to the org, as a plain object with
// its cohort and linked contact joined — or null when not found.
export function getCohortRegistration(organizationId, cohortId, id) {
  return Registration.findOne({
    where: { id, cohort_id: cohortId, organization_id: organizationId },
    include: [{ association: 'cohort' }, { association: 'contact' }]
  }).then((row) => (row ? row.toJSON() : null))
}
