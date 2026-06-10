const WAITLIST = { kind: 'link', label: 'Join Waitlist', href: '/waitlist' }
const CLOSED = { kind: 'closed', label: 'Registrations closed' }

// A cohort card's primary action by registration phase and seats: a
// closed notice once the window passes, the waitlist before it opens or
// when full, otherwise register. Links are root-relative; the portal
// host rewrite prepends /portal.
export function cohortActionProps(card) {
  if (card.phase === 'closed') return CLOSED

  if (card.phase === 'waitlist' || card.spotsLeft <= 0) return WAITLIST

  return { kind: 'link', label: 'Register', href: `/register/${card.id}` }
}
