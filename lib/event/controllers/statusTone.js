// A participation status label → a Badge tone name.
const TONES = {
  Attended: 'success',
  Registered: 'accent',
  Waitlist: 'neutral',
  Invited: 'neutral',
  'Not going': 'error'
}

export function statusTone(label) {
  return TONES[label] || 'neutral'
}
