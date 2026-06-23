import { randomUUID } from 'crypto'
import { WaitlistEntry } from '../models'
import { getCohort } from '@/lib/cohort/controllers'
import { renderEmailMessage }
  from '@/lib/email/controllers/renderEmailMessage'
import { acceptanceVars } from './acceptanceVars'

// An editable draft of the "complete your payment" email an accepted
// waitlist entry would receive, built before anything is written so the
// team can review it. Targets the chosen cohort (defaulting to the one they
// signed up for) and carries the ids the send step will need.
export async function previewAcceptance(entryId, cohortId) {
  const entry = await WaitlistEntry.findByPk(entryId)

  if (!entry) return null

  const targetCohortId = cohortId || entry.cohort_id
  const cohort = await getCohort(targetCohortId)
  const registrationId = randomUUID()
  const vars = acceptanceVars(entry, cohort, registrationId)
  const message = await renderEmailMessage('payment_reminder', vars)

  return {
    entryId,
    cohortId: targetCohortId,
    registrationId,
    to: entry.email,
    ...message
  }
}
