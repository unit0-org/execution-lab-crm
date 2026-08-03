import { getCohort } from '@/lib/cohort/controllers'
import { sendComposedEmail }
  from '@/lib/email/controllers/sendComposedEmail'
import { createPendingRegistration } from './createPendingRegistration'
import { syncRegistrationContact } from './syncRegistrationContact'
import { reservationData } from './reservationData'
import { reservationBlocker } from './reservationBlocker'

// Reserve a seat for someone (the draft carries who, which cohort, and the
// reviewed email): hold the seat as a pending registration stamped
// reserved_at — which the confirmed scope counts for the whole hold — put
// them in the CRM like any registrant, and send the invitation to complete.
export async function reserveSeat(draft) {
  const cohort = await getCohort(draft.cohortId)

  if (!cohort) return { error: 'That cohort no longer exists.' }

  const blocker = await reservationBlocker(cohort, draft.to)

  if (blocker) return { error: blocker }

  const reg = await createPendingRegistration(
    draft.cohortId, reservationData(draft)
  )

  await syncRegistrationContact(reg.id, cohort)
  await sendComposedEmail(draft)

  return { reserved: true }
}
