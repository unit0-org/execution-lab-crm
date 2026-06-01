// Luma approval_status → the participant timestamp it sets.
const STATUS_STAMP = {
  approved: 'registered_at',
  waitlist: 'waitlisted_at',
  declined: 'not_going_at',
  invited: 'invited_at',
  pending_approval: 'invited_at'
}

export function mapStatusTimestamps(row, eventDate) {
  const out = {}
  const stamp = STATUS_STAMP[row.approval_status]

  if (stamp) out[stamp] = row.created_at

  if (row.has_joined_event === 'Yes') out.checked_in_at = eventDate

  return out
}
