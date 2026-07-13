import { upsertContact } from '@/lib/contact/controllers/upsertContact'
import { upsertParticipant } from '@/lib/event/controllers/upsertParticipant'
import { storeAnswers } from '@/lib/event/controllers/storeAnswers'
import { dispatchLumaSubscriber }
  from '@/lib/automation/controllers/triggers/dispatchLumaSubscriber'

// Fold one already-mapped guest into an event: find-or-create the
// contact, upsert their participation, save their answers. Idempotent.
export async function importMappedGuest(event, g) {
  const contact = await upsertContact(g)
  const participant = await upsertParticipant(
    event.id,
    contact.id,
    g.participant
  )

  await storeAnswers(event.id, participant.id, g.answers)

  if (contact.created) await dispatchLumaSubscriber(contact.id)

  return {
    contactCreated: contact.created,
    participantCreated: participant.created
  }
}
