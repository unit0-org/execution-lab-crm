// Luma API approval_status → the participant timestamp it sets.
const STATUS_STAMP = {
  approved: 'registered_at',
  session: 'registered_at',
  waitlist: 'waitlisted_at',
  declined: 'not_going_at',
  invited: 'invited_at',
  pending_approval: 'invited_at'
}

function firstTicket(guest) {
  return (guest.event_tickets || [])[0] || {}
}

function stampTime(guest) {
  return guest.registered_at || guest.invited_at || guest.joined_at || null
}

// Map an API guest's status + check-in onto participant timestamps.
export function apiGuestTimestamps(guest) {
  const out = {}
  const stamp = STATUS_STAMP[guest.approval_status]
  const checkedIn = firstTicket(guest).checked_in_at || guest.joined_at

  if (stamp && stampTime(guest)) out[stamp] = stampTime(guest)

  if (checkedIn) out.checked_in_at = checkedIn

  return out
}
