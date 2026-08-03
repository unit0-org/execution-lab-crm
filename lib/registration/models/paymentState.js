import { holdEndsAt } from './holdEndsAt'

// A registration's state for display: 'paid'; 'cancelled' once staff
// released a reservation; 'reserved' or 'pending' while the seat is still
// held (staff-reserved vs self-serve); 'expired' once the hold lapsed and
// the seat released. Mirrors the confirmed scope — read-time from the
// timestamps, no seat state is stored.
export function paymentState(registration) {
  if (registration.status === 'paid') return 'paid'

  if (registration.status === 'cancelled') return 'cancelled'

  const held = Date.now() < holdEndsAt(registration).getTime()

  if (!held) return 'expired'

  return registration.reserved_at ? 'reserved' : 'pending'
}
