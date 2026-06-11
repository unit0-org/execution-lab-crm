import { shiftIso } from './shiftIso'
import { OPEN_DAYS, CLOSE_DAYS } from './registrationWindowDays'

// The rule-derived registration window for a cohort's start date, used to
// seed the editable dates at creation. registrationPhase falls back to the
// same rule whenever a date is left unset.
export function defaultRegistrationWindow(startDate) {
  return {
    registration_opens_at: shiftIso(startDate, -OPEN_DAYS),
    registration_closes_at: shiftIso(startDate, -CLOSE_DAYS)
  }
}
