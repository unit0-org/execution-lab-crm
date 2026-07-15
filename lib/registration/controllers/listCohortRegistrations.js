import { Registration } from '@/lib/registration/models'
import { registrationInclude } from './registrationInclude'
import { attachPaidCharges } from './attachPaidCharges'

// Everyone registered for a cohort, newest first, as plain objects — each
// carrying what Stripe actually captured for the seat.
export async function listCohortRegistrations(cohortId) {
  const rows = await Registration.findAll({
    where: { cohort_id: cohortId },
    include: registrationInclude,
    order: [['created_at', 'DESC']]
  })

  return attachPaidCharges(rows.map((r) => r.toJSON()))
}
