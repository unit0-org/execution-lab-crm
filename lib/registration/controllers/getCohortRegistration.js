import { Registration } from '@/lib/registration/models'
import { attachPaidCharges } from './attachPaidCharges'
import { attachPlanInstallments } from './attachPlanInstallments'

const firstOrNull = (rows) => rows[0] || null

// One registration in a cohort as a plain object with its cohort and linked
// contact joined, the real Stripe charges attached and its scheduled second
// half when it has one — or null if not found.
export async function getCohortRegistration(cohortId, id) {
  const row = await Registration.findOne({
    where: { id, cohort_id: cohortId },
    include: [{ association: 'cohort' }, { association: 'contact' }]
  })

  if (!row) return null

  const seats = await attachPaidCharges([row.toJSON()])

  return firstOrNull(await attachPlanInstallments(seats))
}
