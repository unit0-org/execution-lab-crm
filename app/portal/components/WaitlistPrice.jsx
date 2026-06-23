import { Stack } from '@/ui/layout/Stack'
import { MonoLabel } from '@/ui/atoms/MonoLabel'
import { PriceTag } from '@/ui/molecules/PriceTag'
import { formatDollars } from '@/lib/portal/formatDollars'

// The full program price, shown on the waitlist. The 20% reward is
// conditional (pre-registration or the first 2 in-window seats), so a
// waitlister can't count on it yet — advertise the regular price, not a
// discount nobody on the list has earned.
export function WaitlistPrice({ pricing }) {
  if (!pricing?.amountCents) return null

  const fullCents = pricing.regularCents ?? pricing.amountCents

  return (
    <Stack gap="xs">
      <MonoLabel tone="muted" size={10} caps>Program price</MonoLabel>
      <PriceTag price={formatDollars(fullCents)} size={28} />
    </Stack>
  )
}
