import { Registration } from '@/lib/registration/models'
import { findReusableRegistration } from './findReusableRegistration'

// One registration per person per cohort. On a repeat submit (they filled
// the form again after abandoning payment, or they're completing a seat we
// reserved for them) reuse the existing row and restart its hold; create
// one only when none exists. A reserved seat keeps its reserved_at — and so
// its longer hold — because nothing here clears it. Plain object out.
export async function createPendingRegistration(cohortId, data) {
  const existing =
    await findReusableRegistration(cohortId, data.id, data.email)

  if (existing?.status === 'paid') {
    throw new Error('You are already registered for this cohort.')
  }

  const values = { cohort_id: cohortId, status: 'pending', ...data }
  const row = existing
    ? await existing.update({ ...values, created_at: new Date() })
    : await Registration.create(values)

  return row.toJSON()
}
