import { Narrow } from '@/ui/layout/Narrow'
import { Stack } from '@/ui/layout/Stack'
import { Columns } from '@/ui/layout/Columns'
import { StatTile } from '@/ui/molecules/StatTile'
import { ButtonLink } from '@/ui/atoms/ButtonLink'
import { WaitlistThanksHead } from './WaitlistThanksHead'
import { WaitlistNext } from './WaitlistNext'
import { waitlistThanksView } from './waitlistThanksView'

// The confirmation: wave + the 24h rule + the first-mover discount, then
// next steps. We never show the list position — that would reveal how
// short the list is and kill the urgency.
export function WaitlistThanks({ result }) {
  const v = waitlistThanksView(result)

  return (
    <Narrow>
      <Stack gap="lg">
        <WaitlistThanksHead blurb={v.blurb} />
        <Columns>
          <StatTile value={v.wave} label="Notified in" />
          <StatTile value="24h" label="To claim your seat" />
          <StatTile value="20% off" label="First 2 in your wave" />
        </Columns>
        <WaitlistNext wave={v.waveNumber} />
        <ButtonLink href="/" tone="primary">Back to all cohorts</ButtonLink>
      </Stack>
    </Narrow>
  )
}
