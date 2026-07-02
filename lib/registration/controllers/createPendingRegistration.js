import { Registration } from '@/lib/registration/models'
import { normalizeEmail } from '@/lib/registration/models/normalizeEmail'

// One registration per person per cohort. On a repeat submit (they filled
// the form again after abandoning payment) reuse the existing row and
// restart its hold; create one only when none exists. Plain object out.
export async function createPendingRegistration(cohortId, data) {
  const email = normalizeEmail(data.email)

  const existing = await Registration.findOne({
    where: { cohort_id: cohortId, email }
  })

  if (existing?.status === 'paid') {
    throw new Error('You are already registered for this cohort.')
  }

  const values = { cohort_id: cohortId, status: 'pending', ...data }
  const row = existing
    ? await existing.update({ ...values, created_at: new Date() })
    : await Registration.create(values)

  return row.toJSON()
}
