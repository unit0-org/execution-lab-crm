import { shiftIso } from './shiftIso'

const MONDAY = 1
const DAYS_TO_FOURTH_MONDAY = 21

const daysUntilMonday = (iso) => {
  const day = new Date(`${iso}T00:00:00Z`).getUTCDay()

  return (MONDAY - day + 7) % 7
}

// When the payment plan's second half is charged: the 4th Monday on or
// after the cohort starts — mid-program. A cohort that starts on a Monday
// is charged exactly three weeks later. Derived from the start date, so
// moving a cohort moves the charge with it.
export function resolvePlanChargeDate(startDateIso) {
  const toFirstMonday = daysUntilMonday(startDateIso)

  return shiftIso(startDateIso, toFirstMonday + DAYS_TO_FOURTH_MONDAY)
}
