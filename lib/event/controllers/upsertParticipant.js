import { EventParticipant } from '../models'

// State timestamps mark when a transition first happened — never
// overwrite one that's set. Ticket/payment fields take the new value.
const STATE_TIMESTAMPS = [
  'invited_at', 'registered_at', 'waitlisted_at',
  'not_going_at', 'checked_in_at'
]

function preserveExistingTimestamps(existing, incoming) {
  const next = { ...incoming }

  for (const field of STATE_TIMESTAMPS)
    next[field] = existing[field] || incoming[field]

  return next
}

export async function upsertParticipant(eventId, contactId, data) {
  const [participant, created] = await EventParticipant.findOrCreate({
    where: { contact_id: contactId, own_event_id: eventId },
    defaults: data
  })

  if (created) return participant.id

  await participant.update(preserveExistingTimestamps(participant, data))

  return participant.id
}
