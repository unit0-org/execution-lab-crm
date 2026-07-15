const EMPTY = { filled: 0, revenue: 0 }

const bump = (at, cents) => ({
  filled: at.filled + 1,
  revenue: at.revenue + cents
})

// Fold reconciled registrations into a per-cohort map of { filled, revenue }:
// filled counts seats, revenue sums what Stripe actually captured for each.
export function tallyByCohort(registrations) {
  const stats = {}

  registrations.forEach((r) => {
    const at = stats[r.cohort_id] || EMPTY

    stats[r.cohort_id] = bump(at, r.paid_amount_cents || 0)
  })

  return stats
}
