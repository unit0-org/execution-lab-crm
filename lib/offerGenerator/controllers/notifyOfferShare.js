import { sendTemplatedEmail }
  from '@/lib/email/controllers/sendTemplatedEmail'
import { offerAudience } from './offerAudience'
import { offerShareVars } from './offerShareVars'

const trySend = (email, vars) =>
  sendTemplatedEmail('offer_shared', email, vars).catch(() => null)

// Email each person the offer was just shared with, best-effort — a failed
// send never bubbles up and never blocks the share itself. Names and emails
// resolve from the audience, which now includes the new sharees.
export async function notifyOfferShare(input) {
  const audience = await offerAudience(input.offerId)
  const byId = new Map(audience.map((person) => [person.contactId, person]))
  const vars = offerShareVars({
    offerId: input.offerId, offerName: input.offerName,
    ownerName: byId.get(input.ownerId)?.name
  })

  for (const id of input.contactIds) {
    const person = byId.get(id)

    if (person?.email) await trySend(person.email, vars)
  }
}
