import { randomUUID } from 'crypto'
import { WaitlistEntry } from '../models'
import { getCohort } from '@/lib/cohort/controllers'
import { renderEmailMessage }
  from '@/lib/email/controllers/renderEmailMessage'
import { acceptanceVars } from './acceptanceVars'

// An editable draft of the "complete your payment" email an accepted
// waitlist entry would receive, built before anything is written so the
// team can review it. Carries the ids the send step will need.
export async function previewAcceptance(entryId) {
  const entry = await WaitlistEntry.findByPk(entryId)

  if (!entry) return null

  const cohort = await getCohort(entry.cohort_id)
  const registrationId = randomUUID()
  const vars = acceptanceVars(entry, cohort, registrationId)
  const message = await renderEmailMessage('payment_reminder', vars)

  return {
    entryId,
    cohortId: entry.cohort_id,
    registrationId,
    to: entry.email,
    ...message
  }
}
