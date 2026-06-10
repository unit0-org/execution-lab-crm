// Remaining seats in a cohort, never below zero.
export function spotsLeft(capacity, filled) {
  return Math.max(0, capacity - filled)
}
