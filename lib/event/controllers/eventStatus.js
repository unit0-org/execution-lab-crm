const STATES = [
  ['checked_in_at', 'Attended event', 'success'],
  ['not_going_at', 'Not going to event', 'error'],
  ['registered_at', 'Registered for event', 'accent'],
  ['waitlisted_at', 'Waitlisted for event', 'neutral'],
  ['invited_at', 'Invited to event', 'neutral']
]

// Attendance label + badge tone, from whichever timestamp is set.
export function eventStatus(participant) {
  const match = STATES.find(([field]) => participant[field])

  if (!match) return { status: 'Event', tone: 'neutral' }

  return { status: match[1], tone: match[2] }
}
