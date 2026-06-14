import { expireStaleInvites } from './expireStaleInvites'
import { activeInviteExists } from './activeInviteExists'
import { openCohortWithSpot } from './openCohortWithSpot'
import { nextWaitingEntry } from './nextWaitingEntry'
import { inviteToRegister } from './inviteToRegister'

// Advance the global waitlist: expire lapsed invites, then — if no invite
// is still out and a seat is free — notify the single next person (3.2).
export async function processWaitlist() {
  await expireStaleInvites()

  if (await activeInviteExists()) return

  const cohort = await openCohortWithSpot()

  if (!cohort) return

  const entry = await nextWaitingEntry()

  if (!entry) return

  await inviteToRegister(entry, cohort)
}
