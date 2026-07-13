// State timestamps mark when a transition first happened — never
// overwrite one that's set. Ticket/payment fields take the new value.
const STATE_TIMESTAMPS = [
  'invited_at', 'registered_at', 'waitlisted_at',
  'not_going_at', 'checked_in_at'
]

export function preserveExistingTimestamps(existing, incoming) {
  const next = { ...incoming }

  for (const field of STATE_TIMESTAMPS)
    next[field] = existing[field] || incoming[field]

  return next
}
