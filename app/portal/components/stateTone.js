// MonoLabel tone for a cohort state (matches the StateTag color).
const TONES = {
  launch: 'cool', open: 'accent', wave: 'wave', waitlist: 'cold',
  full: 'subtle', soon: 'subtle', closed: 'subtle'
}

export const stateTone = (state) => TONES[state] || 'muted'
