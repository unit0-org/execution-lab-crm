import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { formatDollars } from '@/lib/portal/formatDollars'
import { cohortMonthYear } from '@/lib/portal/cohortMonthYear'

const beforeDate = (opensAt) =>
  opensAt ? cohortMonthYear(opensAt).startLabel : 'registration opens'

// The discount's deadline: a date before registration opens (pre-reg), or
// the early-bird seat limit once it's already open.
const deadline = (pricing, opensAt) =>
  pricing.rewardKind === 'earlybird'
    ? 'while early-bird seats last'
    : `by registering before ${beforeDate(opensAt)}`

// "Save $X <deadline>" — only when an early-bird discount is actually in
// effect (a regular price to compare against).
export function SaveLine({ pricing, opensAt }) {
  if (!pricing.regularCents) return null

  const save = formatDollars(pricing.regularCents - pricing.amountCents)

  return (
    <MonoLabel tone="cool" size={12}>
      Save {save} {deadline(pricing, opensAt)}
    </MonoLabel>
  )
}
