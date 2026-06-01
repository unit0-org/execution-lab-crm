// Luma approval_status → the participant timestamp it sets.
const STATUS_STAMP = {
  approved: 'registered_at',
  waitlist: 'waitlisted_at',
  declined: 'not_going_at',
  invited: 'invited_at',
  pending_approval: 'invited_at'
}

// Luma exports check-ins two ways: a `checked_in_at` timestamp, or a
// `has_joined_event` Yes/No flag that carries no time of its own.
function checkInTime(row, eventDate) {
  if (row.checked_in_at) return row.checked_in_at

  if (row.has_joined_event === 'Yes') return eventDate || row.created_at

  return null
}

export function mapStatusTimestamps(row, eventDate) {
  const out = {}
  const stamp = STATUS_STAMP[row.approval_status]
  const checkedIn = checkInTime(row, eventDate)

  if (stamp) out[stamp] = row.created_at

  if (checkedIn) out.checked_in_at = checkedIn

  return out
}
