import { shiftIso } from './shiftIso'
import { OPEN_DAYS, CLOSE_DAYS, HIDE_DAYS } from './registrationWindowDays'

export const opensOn = (cohort) =>
  cohort.registration_opens_at || shiftIso(cohort.start_date, -OPEN_DAYS)

export const closesOn = (cohort) =>
  cohort.registration_closes_at || shiftIso(cohort.start_date, -CLOSE_DAYS)

// A cohort's registration phase on `today` (YYYY-MM-DD): waitlist before the
// window opens, register while it is open, closed once it passes, and hidden
// 5 days after the cohort starts. The open/close dates are editable per
// cohort, falling back to the rule defaults when unset.
export function registrationPhase(cohort, today) {
  if (today >= shiftIso(cohort.start_date, HIDE_DAYS)) return 'hidden'

  if (today < opensOn(cohort)) return 'waitlist'

  if (today < closesOn(cohort)) return 'register'

  return 'closed'
}
