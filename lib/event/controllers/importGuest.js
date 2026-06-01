import { upsertContact } from '@/lib/contacts/upsertContact'
import { mapLumaGuest } from './mapLumaGuest'
import { upsertParticipant } from './upsertParticipant'

// Import one Luma guest row into an event, creating the contact if needed.
export async function importGuest(event, row) {
  const g = mapLumaGuest(row, event.date)
  const contactId = await upsertContact(g)

  await upsertParticipant(event.id, contactId, g.participant)

  return { ok: true }
}
