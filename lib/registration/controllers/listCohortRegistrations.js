import { Registration } from '@/lib/registration/models'
import { registrationInclude } from './registrationInclude'

// Everyone registered for a cohort, newest first, as plain objects.
export function listCohortRegistrations(organizationId, cohortId) {
  return Registration.findAll({
    where: { organization_id: organizationId, cohort_id: cohortId },
    include: registrationInclude,
    order: [['created_at', 'DESC']]
  }).then((rows) => rows.map((r) => r.toJSON()))
}
