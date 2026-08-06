import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { formatDollars } from '@/lib/portal/formatDollars'
import { saveLineText } from './saveLineText'

// "Save $X …" — only when a discount is actually in effect (a regular price
// to compare against). What follows depends on which discount won; see
// saveLineText.
export function SaveLine({ pricing, opensAt }) {
  if (!pricing.regularCents) return null

  const save = formatDollars(pricing.regularCents - pricing.amountCents)

  return (
    <MonoLabel tone="cool" size={12}>
      {saveLineText(pricing, save, opensAt)}
    </MonoLabel>
  )
}
