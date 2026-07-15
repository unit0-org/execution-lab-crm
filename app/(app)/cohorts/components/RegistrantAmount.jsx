import { paymentState } from '@/lib/registration/models/paymentState'
import { formatDollars } from '@/lib/portal/formatDollars'

// What a registrant actually paid, for the roster; a dash until the seat is
// paid, so an unpaid hold never reads as money collected.
export function RegistrantAmount({ registration }) {
  if (paymentState(registration) !== 'paid') return '—'

  return formatDollars(registration.amount_total)
}
