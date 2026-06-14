import { Registration } from '@/lib/registration/models'

// One registration in a cohort as a plain object with its cohort and
// linked contact joined — or null when not found.
export function getCohortRegistration(cohortId, id) {
  return Registration.findOne({
    where: { id, cohort_id: cohortId },
    include: [{ association: 'cohort' }, { association: 'contact' }]
  }).then((row) => (row ? row.toJSON() : null))
}
