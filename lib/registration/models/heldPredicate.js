import { literal } from 'sequelize'
import {
  HOLD_HOURS, RESERVATION_HOLD_DAYS
} from '@/lib/cohort/controllers/holdPolicy'

const col = (name) => `"registration"."${name}"`

// An ordinary registration holds its seat for HOLD_HOURS from when it
// started, which is all an abandoned checkout deserves.
const selfServeHeld =
  `(${col('reserved_at')} IS NULL AND ` +
  `${col('created_at')} > NOW() - INTERVAL '${HOLD_HOURS} hours')`

// A staff-reserved seat holds for RESERVATION_HOLD_DAYS from reserved_at.
// A null reserved_at makes this comparison null, never true, so the two
// predicates can never both match.
const reservationHeld =
  `(${col('reserved_at')} > ` +
  `NOW() - INTERVAL '${RESERVATION_HOLD_DAYS} days')`

// Whether an unpaid seat is still within its hold, whichever hold applies.
// Computed at read from the timestamps — no seat state is ever stored, so
// a lapsed hold frees its seat everywhere at the same instant.
export const stillHeld = literal(`(${selfServeHeld} OR ${reservationHeld})`)
