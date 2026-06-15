import { expireStaleInvites } from './expireStaleInvites'
import { activeInviteExists } from './activeInviteExists'
import { openCohortWithSpot } from './openCohortWithSpot'
import { nextWaitingEntry } from './nextWaitingEntry'
import { inviteToRegister } from './inviteToRegister'

// Advance the global waitlist: expire lapsed invites, then — if no invite
// is still out and a seat is free — notify the single next person (3.2).
// Returns counts so the cron log records what each run did.
export async function processWaitlist() {
  const [expired] = await expireStaleInvites()

  if (await activeInviteExists()) return { expired, invited: 0 }

  const cohort = await openCohortWithSpot()

  if (!cohort) return { expired, invited: 0 }

  const entry = await nextWaitingEntry()

  if (!entry) return { expired, invited: 0 }

  await inviteToRegister(entry, cohort)

  return { expired, invited: 1 }
}
