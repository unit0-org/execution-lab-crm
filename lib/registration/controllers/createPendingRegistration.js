import { Registration } from '@/lib/registration/models'

// A pending registration awaiting payment; returns it as a plain object.
export async function createPendingRegistration(cohortId, data) {
  const row = await Registration.create({
    cohort_id: cohortId, status: 'pending', ...data
  })

  return row.toJSON()
}
