// Waitlist screen copy.
export const WAITLIST_BLURB = 'Registration for this cohort opens in a '
  + 'window. Join the waitlist and you’ll be first in line — invited in '
  + 'small waves before seats open to anyone else.'

export const EXPLAINER_STEPS = [
  { title: 'Waves of 6', desc: 'Each cohort seats 6. When registration '
    + 'opens, we notify the waitlist in waves of 6 — in order.' },
  { title: '24 hours to claim', desc: 'Your wave gets 24 hours to register '
    + 'before the next 6 are invited.' },
  { title: 'Then it opens up', desc: 'Once the whole list is through, '
    + 'remaining seats open to the public.' },
  { title: 'You’ll know first', desc: 'We email and text you the moment '
    + 'your turn is live.' }
]

export const EXPLAINER_FOOTER =
  'First 2 to register in any wave save 20%.'

export const nextSteps = (wave) => [
  `When registration opens, the first 6 on the list are invited — you go `
    + `in wave ${wave}.`,
  'You get 24 hours to register and lock your seat before the next 6 are '
    + 'notified.',
  'Be ready: the first 2 to register in any wave save 20%.'
]
