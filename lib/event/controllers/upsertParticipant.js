import { EventParticipant } from '../models'
import { preserveExistingTimestamps } from './preserveExistingTimestamps'
import { dispatchEventRegistered }
  from '@/lib/automation/controllers/triggers/dispatchEventRegistered'

// Returns { id, created } — created is true for a brand-new participant.
export async function upsertParticipant(eventId, contactId, data) {
  const [participant, created] = await EventParticipant.findOrCreate({
    where: { contact_id: contactId, own_event_id: eventId },
    defaults: data
  })

  if (!created)
    await participant.update(preserveExistingTimestamps(participant, data))

  if (created) await dispatchEventRegistered(contactId)

  return { id: participant.id, created }
}
