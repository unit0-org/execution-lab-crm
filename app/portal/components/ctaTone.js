// Button tone for a cohort CTA, matched to its state.
const TONES = {
  prereg: 'launch', earlybird: 'launch', launch: 'launch',
  open: 'primary', wave: 'wave',
  waitlist: 'waitlist', full: 'waitlist', soon: 'quiet'
}

// Cards render the outlined twin so the hero's solid CTA stays the single
// primary call to action on the page.
const OUTLINE = {
  primary: 'primaryOutline', launch: 'launchOutline', wave: 'waveOutline'
}

export const ctaTone = (state, outline) => {
  const tone = TONES[state] || 'primary'

  return outline ? OUTLINE[tone] || tone : tone
}
