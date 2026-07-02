import { HOLD_HOURS } from '@/lib/cohort/controllers/holdPolicy'

const HOLD_MS = HOLD_HOURS * 60 * 60 * 1000

// A registration's payment state for display: 'paid'; 'pending' while it is
// still within its hold; 'expired' once an unpaid seat's hold has lapsed and
// the seat has been released. Mirrors the confirmed scope — read-time from
// created_at, no seat state is stored.
export function paymentState(registration) {
  if (registration.status === 'paid') return 'paid'

  const heldUntil = new Date(registration.created_at).getTime() + HOLD_MS

  if (Date.now() < heldUntil) return 'pending'

  return 'expired'
}
