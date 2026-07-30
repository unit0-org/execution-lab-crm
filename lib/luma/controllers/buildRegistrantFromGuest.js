import { mapApiGuest } from './mapApiGuest'

function registeredAtMs(guest) {
  const at = guest.registered_at || guest.joined_at
  const ms = Date.parse(at || '')

  if (Number.isNaN(ms)) return Date.now()

  return ms
}

// The bits of a Luma guest an ad conversion needs: who they are, when
// they registered, what they paid, and an id that stays the same across
// webhook retries so one person is never counted twice. Reads the guest
// through mapApiGuest so field names live in one place.
export function buildRegistrantFromGuest(guest) {
  const mapped = mapApiGuest(guest)

  return {
    email: mapped.email,
    firstName: mapped.first_name,
    lastName: mapped.last_name,
    amountPaidCents: mapped.participant.amount_paid_cents,
    registeredAt: registeredAtMs(guest),
    dedupId: guest.api_id || null
  }
}
