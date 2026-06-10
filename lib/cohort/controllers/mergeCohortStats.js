// Attach a cohort's filled/revenue stats, defaulting to zero when the
// cohort has no paid registrations yet.
export function mergeCohortStats(cohort, stats) {
  const own = stats[cohort.id] || { filled: 0, revenue: 0 }

  return { ...cohort, filled: own.filled, revenue: own.revenue }
}
