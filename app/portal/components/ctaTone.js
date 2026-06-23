// Button tone for a cohort CTA, matched to its state.
const TONES = {
  prereg: 'launch', earlybird: 'launch', launch: 'launch',
  open: 'primary', wave: 'wave',
  waitlist: 'waitlist', full: 'waitlist', soon: 'quiet'
}

export const ctaTone = (state) => TONES[state] || 'primary'
