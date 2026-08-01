import { upsertContact } from '@/lib/contact/controllers/upsertContact'
import { upsertParticipant } from '@/lib/event/controllers/upsertParticipant'
import { isInviteOnly } from '@/lib/event/controllers/isInviteOnly'
import { storeAnswers } from '@/lib/event/controllers/storeAnswers'
import { dispatchLumaSubscriber }
  from '@/lib/automation/controllers/triggers/dispatchLumaSubscriber'

const SKIPPED =
  { contactCreated: false, participantCreated: false, skipped: true }

// Fold one already-mapped guest into an event: find-or-create the contact,
// upsert their participation, save their answers. Idempotent.
//
// The one gate every intake path shares (API sync, live webhook, CSV
// import): a guest who was only ever invited never enters the CRM.
export async function importMappedGuest(event, g) {
  if (isInviteOnly(g.participant)) return SKIPPED

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
