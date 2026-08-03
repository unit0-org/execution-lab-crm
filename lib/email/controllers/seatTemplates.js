import { PAYMENT_REMINDER } from './paymentReminderTemplate'
import { PAYMENT_FOLLOWUP } from './paymentFollowupTemplate'
import { PAYMENT_PENDING } from './paymentPendingTemplate'
import { PAYMENT_BALANCE_FAILED } from './paymentBalanceFailedTemplate'
import { SEAT_RESERVED } from './seatReservedTemplate'
import { SEAT_RESERVATION_REMINDER }
  from './seatReservationReminderTemplate'

// Everything sent to someone about the seat they are taking: chasing a
// payment, and reserving one for them.
export const SEAT_TEMPLATES = [
  PAYMENT_REMINDER,
  PAYMENT_FOLLOWUP,
  PAYMENT_PENDING,
  PAYMENT_BALANCE_FAILED,
  SEAT_RESERVED,
  SEAT_RESERVATION_REMINDER
]
