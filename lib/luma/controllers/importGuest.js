import { upsertContact } from '@/lib/contacts/upsertContact'
import { upsertParticipant } from '@/lib/event/controllers/upsertParticipant'
import { mapLumaGuest } from './mapLumaGuest'

// Import one Luma guest row into an event, creating the contact if needed.
export async function importGuest(event, row) {
  const g = mapLumaGuest(row, event.date)
  const contact = await upsertContact(g)
  const participant = await upsertParticipant(
    event.id,
    contact.id,
    g.participant
  )

  return {
    contactCreated: contact.created,
    participantCreated: participant.created
  }
}
