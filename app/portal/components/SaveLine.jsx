import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { formatDollars } from '@/lib/portal/formatDollars'

// "Save $X · returns to $Y after" — only when an early-bird discount is
// actually in effect (a regular price to compare against).
export function SaveLine({ pricing }) {
  if (!pricing.regularCents) return null

  const save = formatDollars(pricing.regularCents - pricing.amountCents)
  const regular = formatDollars(pricing.regularCents)

  return (
    <MonoLabel tone="cool" size={12}>
      Save {save} · returns to {regular} after
    </MonoLabel>
  )
}
