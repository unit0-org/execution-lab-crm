import { shiftIso } from './shiftIso'

const OPEN_DAYS = 15
const CLOSE_DAYS = 10
const HIDE_DAYS = 5

// A cohort's registration phase on `today` (YYYY-MM-DD), derived from its
// start_date: waitlist before the window, register while it is open,
// closed once it passes, and hidden 5 days after the cohort starts.
export function registrationPhase(cohort, today) {
  const start = cohort.start_date

  if (today >= shiftIso(start, HIDE_DAYS)) return 'hidden'

  if (today < shiftIso(start, -OPEN_DAYS)) return 'waitlist'

  if (today < shiftIso(start, -CLOSE_DAYS)) return 'register'

  return 'closed'
}
