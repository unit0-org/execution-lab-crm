import { Registration } from '../../registration/models'
import { WaitlistEntry } from '../../waitlist/models'
import { collectCohortIds } from './collectCohortIds'

const SIGNED_UP = 'Someone has signed up for this cohort.'
const INVITED = 'Someone is invited to this cohort from the waitlist.'
const WAITLISTED = 'Someone is on the waitlist for this cohort.'

// The single definition of "this cohort can't be deleted", keyed by cohort
// id and holding the reason to show. ANY registration row blocks the
// delete — including one that no longer holds a seat (expired, failed, or
// a lapsed pending hold), because that person and their payment history
// are still on record.
//
// The waitlist only blocks while an entry is still **active** — `waiting`
// or `invited`, per `WaitlistEntry.scope('active')`, the model's own
// definition of "still in the waiting line" (a lapsed invite is swept to
// `expired` by expireStaleInvites). An expired or already-accepted entry is
// history, not a claim: reading every row instead of the scope left a
// cohort with no sign-ups undeletable forever, because someone's invite had
// lapsed months earlier.
export async function findDeleteBlockers() {
  const line = WaitlistEntry.scope('active')
  const waiting = await collectCohortIds(line, 'cohort_id')
  const invited = await collectCohortIds(line, 'invite_cohort_id')
  const signedUp = await collectCohortIds(Registration, 'cohort_id')
  const blockers = {}

  waiting.forEach((id) => { blockers[id] = WAITLISTED })
  invited.forEach((id) => { blockers[id] = INVITED })
  signedUp.forEach((id) => { blockers[id] = SIGNED_UP })

  return blockers
}
