import { upsertParticipant } from './upsertParticipant'
import { statusField } from './statusStates'

// Add an existing contact to an event at a starting status (its timestamp
// is set; upsertParticipant preserves any state already recorded).
export async function addAttendee(eventId, contactId, status) {
  if (!contactId) return { error: 'A contact is required' }

  const field = statusField(status) || 'invited_at'

  await upsertParticipant(eventId, contactId, { [field]: new Date() })

  return { ok: true }
}
