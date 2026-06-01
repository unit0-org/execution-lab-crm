import { EventParticipant } from '../models'

const STAMPS = [
  'invited_at', 'registered_at', 'waitlisted_at',
  'not_going_at', 'checked_in_at'
]

// Keep any timestamp already set; refresh ticket/amount from the import.
function merge(row, data) {
  const out = { ...data }

  for (const k of STAMPS) out[k] = row[k] || data[k]

  return out
}

export async function upsertParticipant(eventId, contactId, data) {
  const [row, created] = await EventParticipant.findOrCreate({
    where: { contact_id: contactId, own_event_id: eventId },
    defaults: data
  })

  if (created) return row.id

  await row.update(merge(row, data))

  return row.id
}
