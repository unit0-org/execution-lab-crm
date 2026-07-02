// How long an unpaid registration reserves its seat before it releases. A
// seat is confirmed only once payment lands; until then it's held this long
// from when the registration started, then released for someone else.
export const HOLD_HOURS = 2
