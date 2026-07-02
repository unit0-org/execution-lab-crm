import {
  registrationPhase, spotsLeft, shiftIso, SOLD_OUT_GRACE_DAYS
} from '@/lib/cohort/controllers'

// A cohort shows on the portal while its registration phase is live, and a
// sold-out one lingers as "Sold out" for a grace window past the hide date
// so a recent sell-out still reads as momentum.
export function isPortalVisible(cohort, filled, today) {
  if (registrationPhase(cohort, today) !== 'hidden') return true

  const soldOut = spotsLeft(cohort.capacity, filled) <= 0

  return soldOut && today < shiftIso(cohort.start_date, SOLD_OUT_GRACE_DAYS)
}
