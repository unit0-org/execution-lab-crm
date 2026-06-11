import { Narrow } from '@/ui/layout/Narrow'
import { Stack } from '@/ui/layout/Stack'
import { Columns } from '@/ui/layout/Columns'
import { StatTile } from '@/ui/molecules/StatTile'
import { ButtonLink } from '@/ui/atoms/ButtonLink'
import { WaitlistThanksHead } from './WaitlistThanksHead'
import { WaitlistNext } from './WaitlistNext'
import { waitlistThanksView } from './waitlistThanksView'

// The confirmation: position + wave + the 24h rule, then next steps.
export function WaitlistThanks({ result }) {
  const v = waitlistThanksView(result)

  return (
    <Narrow>
      <Stack gap="lg">
        <WaitlistThanksHead blurb={v.blurb} />
        <Columns>
          <StatTile value={v.position} label="Your position" />
          <StatTile value={v.wave} label="Notified in" />
          <StatTile value="24h" label="To claim your seat" />
        </Columns>
        <WaitlistNext wave={v.waveNumber} />
        <ButtonLink href="/" tone="primary">Back to all cohorts</ButtonLink>
      </Stack>
    </Narrow>
  )
}
