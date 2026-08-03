import { withAdvisoryLocks } from '@/lib/db/withAdvisoryLocks'
import { identityKeys } from './identityKeys'
import { findContactIdByIdentity } from './findContactIdByIdentity'
import { createContactWithIdentity } from './createContactWithIdentity'

// Find the contact behind an identity, or create it. Returns { id,
// created } — created is true only when we made a new contact.
//
// The lock is the whole point. One Luma registration fires three webhook
// actions (`guest.registered`, `guest.updated`, `ticket.registered`),
// which arrive as three concurrent requests carrying the same person.
// Look-then-create let all three miss before any of them wrote, so one
// registrant became three contacts. Now they queue on the identity: the
// first creates and commits, the rest wake up and find it.
export function resolveContactId(identity) {
  return withAdvisoryLocks(identityKeys(identity), async (transaction) => {
    const found = await findContactIdByIdentity(identity, transaction)

    if (found) return { id: found, created: false }

    const id = await createContactWithIdentity(identity, transaction)

    return { id, created: true }
  })
}
