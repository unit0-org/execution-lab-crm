import { GrowRow } from '@/ui/layout/GrowRow'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { PriceTag } from '@/ui/molecules/PriceTag'
import { formatDollars } from '@/lib/portal/formatDollars'

// The summary's price line: a kicker + the current price (struck regular
// when discounted).
export function SummaryPrice({ pricing }) {
  const regular = pricing.regularCents
  const regularPrice = regular ? formatDollars(regular) : null
  const label = pricing.discounted ? 'LAUNCH PRICE' : 'PRICE'

  return (
    <GrowRow align="baseline">
      <MonoLabel size={11}>{label}</MonoLabel>
      <PriceTag price={formatDollars(pricing.amountCents)}
        regular={regularPrice} size={28} />
    </GrowRow>
  )
}
