// Per-state tag + CTA copy and intent. `href` is filled in per card.
export const STATE_META = {
  launch: { tag: 'Open · Launch price', cta: 'Register', kind: 'register' },
  open: { tag: 'Open to all', cta: 'Register', kind: 'register' },
  waitlist: { tag: 'Waitlist', cta: 'Join waitlist', kind: 'waitlist' },
  full: { tag: 'Sold out', cta: 'Join waitlist', kind: 'waitlist' },
  closed: { tag: 'Closed', cta: null, kind: 'closed' }
}
