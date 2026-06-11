// Button tone for a cohort CTA, matched to its state.
const TONES = {
  launch: 'launch', open: 'primary', wave: 'wave',
  waitlist: 'waitlist', full: 'quiet', soon: 'quiet'
}

export const ctaTone = (state) => TONES[state] || 'primary'
