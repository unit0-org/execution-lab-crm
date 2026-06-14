const STAMPS = [
  'invited_at', 'registered_at', 'waitlisted_at',
  'not_going_at', 'checked_in_at'
]
const PICK = ['ticket_name', 'currency', 'coupon_code']

const earliest = (a, b) => {
  if (!a) return b

  if (!b) return a

  return a < b ? a : b
}

// Combine two participations into the richest single record.
export function mergedFields(survivor, dup) {
  const out = {}

  for (const f of STAMPS) out[f] = earliest(survivor[f], dup[f])

  for (const f of PICK) out[f] = survivor[f] ?? dup[f]

  out.amount_paid_cents =
    Math.max(survivor.amount_paid_cents || 0, dup.amount_paid_cents || 0)

  return out
}
