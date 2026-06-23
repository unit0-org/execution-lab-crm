// Per-state tag + CTA copy and intent. `href` is filled in per card.
// Register states all lead with "Register now"; waitlist is the secondary
// path (a quiet link), except when sold out where it's the only action.
export const STATE_META = {
  prereg: {
    tag: 'Pre-registration · 20% off', cta: 'Register now', kind: 'register'
  },
  earlybird: {
    tag: 'Early bird · 20% off', cta: 'Register now', kind: 'register'
  },
  launch: {
    tag: 'Open · Launch price', cta: 'Register now', kind: 'register'
  },
  open: { tag: 'Open', cta: 'Register now', kind: 'register' },
  waitlist: { tag: 'Waitlist', cta: 'Join waitlist', kind: 'waitlist' },
  full: { tag: 'Sold out', cta: 'Join waitlist', kind: 'waitlist' },
  closed: { tag: 'Closed', cta: null, kind: 'closed' }
}
