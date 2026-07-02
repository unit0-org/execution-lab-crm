// Rule offsets (in days from start_date) that define a cohort's default
// registration window: it opens 15 days before, closes 10 days before, and
// the cohort hides 5 days after it starts. Shared by the phase logic and
// the create-time defaults so the two never drift apart.
export const OPEN_DAYS = 15
export const CLOSE_DAYS = 10
export const HIDE_DAYS = 5

// A sold-out cohort lingers on the portal as "Sold out" for this many days
// after it starts (past the hide date), so a recent sell-out reads as
// momentum instead of vanishing.
export const SOLD_OUT_GRACE_DAYS = 45
