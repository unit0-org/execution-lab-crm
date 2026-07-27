// How a seat's outstanding second half reads, or null when there is
// nothing to say: no plan, or a plan that has finished paying. A refused
// balance is called out in red — it needs someone to act.
export function planBadgeState(registration) {
  if (!registration.plan_due_on) return null

  if (registration.plan_settled) return null

  if (registration.plan_attempts > 0)
    return { label: 'plan unpaid', tone: 'error' }

  return { label: 'plan 1 of 2', tone: 'accent' }
}
