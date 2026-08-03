import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { formatDollars } from '@/lib/portal/formatDollars'
import { cohortMonthYear } from '@/lib/portal/cohortMonthYear'

const beforeDate = (opensAt) =>
  opensAt ? cohortMonthYear(opensAt).startLabel : 'registration opens'

// "Save $X by registering before <date>" — only when a discount is actually
// in effect (a regular price to compare against). The early-bird deadline is
// always the day registration opens, so there is one phrasing.
export function SaveLine({ pricing, opensAt }) {
  if (!pricing.regularCents) return null

  const save = formatDollars(pricing.regularCents - pricing.amountCents)

  return (
    <MonoLabel tone="cool" size={12}>
      Save {save} by registering before {beforeDate(opensAt)}
    </MonoLabel>
  )
}
