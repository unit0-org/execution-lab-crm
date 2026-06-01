const fullName = (c) =>
  [c.first_name, c.last_name].filter(Boolean).join(' ')

// Flatten a checked-in participant + its contact into an attendee row.
export function toAttendee(participant) {
  const c = participant.contact || {}
  const email = c.contact_email?.[0]?.email || null

  return {
    id: participant.id,
    name: fullName(c) || email || 'Unnamed contact',
    email
  }
}
