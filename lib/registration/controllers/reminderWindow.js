import {
  RESERVATION_HOLD_DAYS, REMINDER_DAYS_BEFORE_RELEASE
} from '@/lib/cohort/controllers/holdPolicy'

const DAY = 24 * 60 * 60 * 1000
const WARN_AFTER_DAYS = RESERVATION_HOLD_DAYS - REMINDER_DAYS_BEFORE_RELEASE

// The age a reservation must have reached to be worth warning: old enough
// that its release is close, but not so old that the seat has already gone
// (reminding someone about a seat they no longer have is worse than
// silence). Derived from the hold, so changing the hold moves this with it.
export function reminderWindow() {
  const now = Date.now()

  return {
    after: new Date(now - RESERVATION_HOLD_DAYS * DAY),
    before: new Date(now - WARN_AFTER_DAYS * DAY)
  }
}
