import { GrowRow } from '@/ui/layout/GrowRow'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { PriceTag } from '@/ui/molecules/PriceTag'
import { formatDollars } from '@/lib/portal/formatDollars'

// The summary's price line: a kicker + the current price (struck regular
// when discounted). "Launch price" is reserved for the cohort's own preset
// discount — a customer's coupon is not one.
export function SummaryPrice({ pricing }) {
  const regular = pricing.regularCents
  const regularPrice = regular ? formatDollars(regular) : null
  const isLaunch = pricing.discountSource === 'launch'
  const label = isLaunch ? 'LAUNCH PRICE' : 'PRICE'

  return (
    <GrowRow align="baseline">
      <MonoLabel size={11}>{label}</MonoLabel>
      <PriceTag price={formatDollars(pricing.amountCents)}
        regular={regularPrice} size={28} />
    </GrowRow>
  )
}
