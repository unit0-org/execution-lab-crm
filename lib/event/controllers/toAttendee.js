import { toStatusLabel } from './statusLabel'
import { statusTone } from './statusTone'
import { contactLabel } from '@/lib/contact/controllers/contactLabel'

// Flatten a participant + its contact into an attendee row.
export function toAttendee(participant) {
  const c = participant.contact || {}
  const email = c.contact_email?.[0]?.email || null
  const status = toStatusLabel(participant)

  return {
    id: participant.id,
    contactId: participant.contact_id,
    name: contactLabel(c),
    email,
    status,
    statusTone: statusTone(status),
    checkedIn: !!participant.checked_in_at
  }
}
