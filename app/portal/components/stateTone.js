// MonoLabel tone for a cohort state (matches the StateTag color).
const TONES = {
  prereg: 'cool', earlybird: 'cool', launch: 'cool',
  open: 'accent', wave: 'wave', waitlist: 'cold',
  full: 'danger', soon: 'subtle', closed: 'subtle'
}

export const stateTone = (state) => TONES[state] || 'muted'
