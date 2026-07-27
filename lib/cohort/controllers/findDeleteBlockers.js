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
// are still on record. A waitlist entry blocks it too, by either of its
// cohort columns: the cohort the person is waiting for (`cohort_id`, which
// carries NO foreign key, so a delete would leave it dangling) and the one
// they were invited to (`invite_cohort_id`, ON DELETE SET NULL, so a
// delete would quietly void the invite). Absent from the map = deletable.
export async function findDeleteBlockers() {
  const waiting = await collectCohortIds(WaitlistEntry, 'cohort_id')
  const invited = await collectCohortIds(WaitlistEntry, 'invite_cohort_id')
  const signedUp = await collectCohortIds(Registration, 'cohort_id')
  const blockers = {}

  waiting.forEach((id) => { blockers[id] = WAITLISTED })
  invited.forEach((id) => { blockers[id] = INVITED })
  signedUp.forEach((id) => { blockers[id] = SIGNED_UP })

  return blockers
}
