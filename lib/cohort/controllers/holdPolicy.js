// From this cohort start date on, a seat is confirmed only once payment
// lands; before it, a pending registration holds its seat indefinitely.
export const PAYMENT_HOLD_CUTOFF = '2026-07-01'

// How long an unpaid registration reserves its seat before it releases.
export const HOLD_HOURS = 2

// Whether this cohort confirms seats only on payment (with a timed hold).
// start_date is a DATEONLY 'YYYY-MM-DD' string, so a plain lexical compare
// is timezone-agnostic.
export function requiresPaymentToConfirm(cohort) {
  return cohort.start_date >= PAYMENT_HOLD_CUTOFF
}

// The hold length to advertise for this cohort; 0 when it doesn't apply.
export function seatHoldHours(cohort) {
  return requiresPaymentToConfirm(cohort) ? HOLD_HOURS : 0
}
