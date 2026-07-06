// The ordered [timestamp field, status label] pairs — the single source
// of truth for an event participant's derived status, highest priority
// first. statusLabel reads it forward; addAttendee reads it backward.
export const STATUS_STATES = [
  ['checked_in_at', 'Attended'],
  ['not_going_at', 'Not going'],
  ['registered_at', 'Registered'],
  ['waitlisted_at', 'Waitlist'],
  ['invited_at', 'Invited']
]

export const STATUS_LABELS = STATUS_STATES.map(([, label]) => label)

// The timestamp column a status label maps to, or null if unknown.
export function statusField(label) {
  const match = STATUS_STATES.find(([, name]) => name === label)

  return match ? match[0] : null
}
