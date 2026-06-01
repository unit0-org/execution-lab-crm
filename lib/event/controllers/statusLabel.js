const STATES = [
  ['checked_in_at', 'Checked in'],
  ['not_going_at', 'Not going'],
  ['registered_at', 'Registered'],
  ['waitlisted_at', 'Waitlist'],
  ['invited_at', 'Invited']
]

// The current participation state, from whichever timestamp is set.
export function toStatusLabel(participant) {
  const match = STATES.find(([field]) => participant[field])

  return match ? match[1] : 'Participant'
}
