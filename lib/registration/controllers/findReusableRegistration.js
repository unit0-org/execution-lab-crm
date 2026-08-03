import { Registration } from '@/lib/registration/models'
import { normalizeEmail } from '@/lib/registration/models/normalizeEmail'

const byIdInCohort = (cohortId, id) =>
  Registration.findOne({ where: { id, cohort_id: cohortId } })

const byEmailInCohort = (cohortId, email) =>
  Registration.findOne({
    where: { cohort_id: cohortId, email: normalizeEmail(email) }
  })

// The row a submit should reuse rather than duplicate. An explicit id is
// tried first — that's a reserved seat being completed, and it must keep
// the seat it is already holding even if they corrected their email on the
// way in. Otherwise it's one registration per person per cohort, matched on
// the normalized email.
export async function findReusableRegistration(cohortId, id, email) {
  const claimed = id ? await byIdInCohort(cohortId, id) : null

  if (claimed) return claimed

  return byEmailInCohort(cohortId, email)
}
