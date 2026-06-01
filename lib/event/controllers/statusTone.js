// A participation status label → a Badge tone name.
const TONES = {
  'Checked in': 'success',
  Registered: 'accent',
  Waitlist: 'neutral',
  Invited: 'neutral',
  'Not going': 'error'
}

export function statusTone(label) {
  return TONES[label] || 'neutral'
}
