import { upsertContact } from '@/lib/contact/controllers/upsertContact'
import { upsertParticipant } from '@/lib/event/controllers/upsertParticipant'
import { storeAnswers } from '@/lib/event/controllers/storeAnswers'
import { mapLumaGuest } from './mapLumaGuest'

// Import one Luma guest row into an event, creating the contact if needed.
export async function importGuest(organizationId, event, row) {
  const g = mapLumaGuest(row, event.date)
  const contact = await upsertContact(organizationId, g)
  const participant = await upsertParticipant(
    event.id,
    contact.id,
    g.participant
  )

  await storeAnswers(event.id, participant.id, g.answers)

  return {
    contactCreated: contact.created,
    participantCreated: participant.created
  }
}
