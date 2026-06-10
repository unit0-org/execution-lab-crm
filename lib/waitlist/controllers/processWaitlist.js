import { expireStaleInvites } from './expireStaleInvites'
import { activeInviteExists } from './activeInviteExists'
import { openCohortWithSpot } from './openCohortWithSpot'
import { nextWaitingEntry } from './nextWaitingEntry'
import { inviteToRegister } from './inviteToRegister'

// Advance the global waitlist: expire lapsed invites, then — if no invite
// is still out and a seat is free — notify the single next person (3.2).
export async function processWaitlist(organizationId) {
  await expireStaleInvites(organizationId)

  if (await activeInviteExists(organizationId)) return

  const cohort = await openCohortWithSpot(organizationId)

  if (!cohort) return

  const entry = await nextWaitingEntry(organizationId)

  if (!entry) return

  await inviteToRegister(entry, cohort)
}
