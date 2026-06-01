import { toStatusLabel } from './statusLabel'

const fullName = (c) =>
  [c.first_name, c.last_name].filter(Boolean).join(' ')

// Flatten a participant + its contact into a row for the attendee table.
export function toAttendee(participant) {
  const c = participant.contact || {}
  const email = c.contact_email?.[0]?.email || null

  return {
    id: participant.id,
    name: fullName(c) || email || 'Unnamed contact',
    email,
    status: toStatusLabel(participant),
    checkedIn: !!participant.checked_in_at
  }
}
