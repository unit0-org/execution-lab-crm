import { Stack } from '@/ui/layout/Stack'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { PriceTag } from '@/ui/molecules/PriceTag'
import { formatDollars } from '@/lib/portal/formatDollars'

// The program price, shown on the waitlist so the cost is clear up front.
export function WaitlistPrice({ pricing }) {
  if (!pricing?.amountCents) return null

  const { amountCents, regularCents, discounted } = pricing
  const regular = discounted ? formatDollars(regularCents) : null

  return (
    <Stack gap="xs">
      <MonoLabel tone="muted" size={10} caps>Program price</MonoLabel>
      <PriceTag price={formatDollars(amountCents)} regular={regular}
        size={28} />
    </Stack>
  )
}
