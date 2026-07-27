import { Registration } from '@/lib/registration/models'
import { registrationInclude } from './registrationInclude'
import { attachPaidCharges } from './attachPaidCharges'
import { attachPlanInstallments } from './attachPlanInstallments'

// Everyone registered for a cohort, newest first, as plain objects — each
// carrying what Stripe actually captured for the seat, and the scheduled
// second half when they are paying in two.
export async function listCohortRegistrations(cohortId) {
  const rows = await Registration.findAll({
    where: { cohort_id: cohortId },
    include: registrationInclude,
    order: [['created_at', 'DESC']]
  })
  const seats = await attachPaidCharges(rows.map((r) => r.toJSON()))

  return attachPlanInstallments(seats)
}
