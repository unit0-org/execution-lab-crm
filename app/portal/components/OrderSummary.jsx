import { Card } from '@/ui/atoms/Card'
import { Stack } from '@/ui/layout/Stack'
import { MetaRow } from '@/ui/molecules/MetaRow'
import { FeatureChecks } from '@/ui/molecules/FeatureChecks'
import { SummaryHead } from './SummaryHead'
import { SummaryPrice } from './SummaryPrice'
import { INCLUSIONS } from './portalCopy'
import { cohortMonthYear } from '@/lib/portal/cohortMonthYear'

// The sticky sidebar: what the applicant is buying + what's included.
export function OrderSummary({ card }) {
  const when = cohortMonthYear(card.start_date)

  return (
    <Card>
      <Stack gap="md">
        <SummaryHead when={when} />
        <Stack gap="xs">
          <MetaRow label="Starts" value={when.startLabel} />
          <MetaRow label="Format" value="8 weeks · weekly live" />
          <MetaRow label="Cohort size" value="6 people, by design" />
        </Stack>
        <SummaryPrice pricing={card.pricing} />
        <FeatureChecks items={INCLUSIONS} column />
      </Stack>
    </Card>
  )
}
