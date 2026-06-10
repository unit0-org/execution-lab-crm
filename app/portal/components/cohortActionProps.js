// Label + href for a cohort's primary action: register when seats
// remain, otherwise join the waitlist. Links are root-relative; the
// portal host rewrite prepends /portal.
export function cohortActionProps(id, spotsLeft) {
  if (spotsLeft > 0) return { label: 'Register', href: `/register/${id}` }

  return { label: 'Join Waitlist', href: '/waitlist' }
}
