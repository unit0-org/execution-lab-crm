import { Registration } from '@/lib/registration/models'
import { attachPaidCharges } from './attachPaidCharges'

const firstOrNull = (rows) => rows[0] || null

// One registration in a cohort as a plain object with its cohort and linked
// contact joined and the real Stripe charge attached — or null if not found.
export async function getCohortRegistration(cohortId, id) {
  const row = await Registration.findOne({
    where: { id, cohort_id: cohortId },
    include: [{ association: 'cohort' }, { association: 'contact' }]
  })

  if (!row) return null

  return firstOrNull(await attachPaidCharges([row.toJSON()]))
}
