import { WaitlistEntry } from '../models'
import { getCohort } from '@/lib/cohort/controllers'
import {
  createPendingRegistration, syncRegistrationContact
} from '@/lib/registration/controllers'
import { sendComposedEmail }
  from '@/lib/email/controllers/sendComposedEmail'
import { registrationData } from './registrationData'
import { markAccepted } from './markAccepted'

// Accept a waitlist entry into the chosen cohort (carried on the draft):
// create their pending registration, sync the contact, email the reviewed
// payment link, and mark them accepted so they leave the line once they pay.
export async function acceptFromWaitlist(draft) {
  const entry = await WaitlistEntry.findByPk(draft.entryId)

  if (!entry) return { skipped: true }

  const cohort = await getCohort(draft.cohortId)
  const reg = await createPendingRegistration(
    draft.cohortId, registrationData(draft, entry)
  )

  await syncRegistrationContact(reg.id, cohort)
  await sendComposedEmail(draft)
  await markAccepted(entry, draft.cohortId)

  return { sent: true }
}
