import { Narrow } from '@/ui/layout/Narrow'
import { Stack } from '@/ui/layout/Stack'
import { Columns } from '@/ui/layout/Columns'
import { StatTile } from '@/ui/molecules/StatTile'
import { ButtonLink } from '@/ui/atoms/ButtonLink'
import { WaitlistThanksHead } from './WaitlistThanksHead'
import { WaitlistNext } from './WaitlistNext'
import { waitlistThanksView } from './waitlistThanksView'

// The confirmation: pure urgency — seat scarcity, the 24h claim window,
// and the first-mover discount. No position or wave, so the screen never
// hints at how short the list is.
export function WaitlistThanks({ result }) {
  const v = waitlistThanksView(result)

  return (
    <Narrow>
      <Stack gap="lg">
        <WaitlistThanksHead blurb={v.blurb} />
        <Columns>
          <StatTile value={v.seats} label="Seats per cohort" />
          <StatTile value="24h" label="To claim your seat" />
          <StatTile value="20% off" label="First 2 to register" />
        </Columns>
        <WaitlistNext />
        <ButtonLink href="/" tone="primary">Back to all cohorts</ButtonLink>
      </Stack>
    </Narrow>
  )
}
