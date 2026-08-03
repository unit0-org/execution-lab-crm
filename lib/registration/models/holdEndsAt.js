import {
  HOLD_HOURS, RESERVATION_HOLD_DAYS
} from '@/lib/cohort/controllers/holdPolicy'

const HOUR = 60 * 60 * 1000
const DAY = 24 * HOUR

// When an unpaid seat's hold runs out, derived from whichever start
// applies: reserved_at for a staff reservation, created_at otherwise.
// The JS twin of heldPredicate, for display and for the reminder job.
export function holdEndsAt(registration) {
  const { reserved_at: reservedAt, created_at: createdAt } = registration

  if (reservedAt) {
    return new Date(
      new Date(reservedAt).getTime() + RESERVATION_HOLD_DAYS * DAY
    )
  }

  return new Date(new Date(createdAt).getTime() + HOLD_HOURS * HOUR)
}
