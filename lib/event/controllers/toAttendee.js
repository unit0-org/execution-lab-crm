import { toStatusLabel } from './statusLabel'
import { statusTone } from './statusTone'

const fullName = (c) =>
  [c.first_name, c.last_name].filter(Boolean).join(' ')

// Flatten a participant + its contact into an attendee row.
export function toAttendee(participant) {
  const c = participant.contact || {}
  const email = c.contact_email?.[0]?.email || null
  const status = toStatusLabel(participant)

  return {
    id: participant.id,
    contactId: participant.contact_id,
    name: fullName(c) || email || 'Unnamed contact',
    email,
    status,
    statusTone: statusTone(status),
    checkedIn: !!participant.checked_in_at
  }
}
