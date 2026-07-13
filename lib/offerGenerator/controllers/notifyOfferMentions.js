import { Offer } from '../models'
import { sendTemplatedEmail }
  from '@/lib/email/controllers/sendTemplatedEmail'
import { offerCommentVars } from './offerCommentVars'

const trySend = (email, vars) =>
  sendTemplatedEmail('offer_comment_mention', email, vars).catch(() => null)

// Email each newly-tagged member (never the author), best-effort — a failure
// never bubbles up. Recipients resolve from the offer's audience.
export async function notifyOfferMentions(input) {
  const byId = new Map(input.audience.map((p) => [p.contactId, p]))
  const offer = await Offer.findByPk(input.offerId)
  const vars = offerCommentVars({
    offerId: input.offerId, offerName: offer?.name,
    actorName: byId.get(input.actorContactId)?.name, body: input.body
  })

  for (const id of input.mentionedIds) {
    if (id === input.actorContactId) continue

    const person = byId.get(id)

    if (person?.email) await trySend(person.email, vars)
  }
}
