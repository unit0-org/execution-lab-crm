// How long an unpaid registration reserves its seat before it releases. A
// seat is confirmed only once payment lands; until then it's held this long
// from when the registration started, then released for someone else.
export const HOLD_HOURS = 2

// A seat a staff member reserved for someone is held far longer: it's a
// promise made to a person, not an abandoned checkout, so it runs from when
// it was reserved (reserved_at) rather than from the registration.
export const RESERVATION_HOLD_DAYS = 7

// How long before a reservation lapses its one reminder goes out.
export const REMINDER_DAYS_BEFORE_RELEASE = 2
