import { Card } from '@/ui/atoms/Card'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Text } from '@/ui/atoms/Text'
import { DateText } from '@/ui/atoms/DateText'
import { CohortPrice } from './CohortPrice'
import { CohortAvailability } from './CohortAvailability'
import { CohortAction } from './CohortAction'

// A single open cohort: title, start date, price, seats, action.
export function CohortCard({ cohort }) {
  return (
    <Card>
      <Stack gap="md">
        <Heading level={2} gutter="none">{cohort.label}</Heading>
        <Text tone="muted">
          Starts <DateText value={cohort.start_date} />
        </Text>
        <CohortPrice pricing={cohort.pricing} />
        <CohortAvailability spotsLeft={cohort.spotsLeft} />
        <CohortAction id={cohort.id} spotsLeft={cohort.spotsLeft} />
      </Stack>
    </Card>
  )
}
