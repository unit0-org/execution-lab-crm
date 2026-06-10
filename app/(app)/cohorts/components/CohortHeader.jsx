import { Heading } from '@/ui/atoms/Heading'
import { Text } from '@/ui/atoms/Text'
import { Badge } from '@/ui/atoms/Badge'
import { DateText } from '@/ui/atoms/DateText'

// Cohort title, start date and current lifecycle status.
export function CohortHeader({ cohort }) {
  return (
    <div>
      <Heading level={1}>{cohort.label}</Heading>
      <Text tone="muted">
        Starts <DateText value={cohort.start_date} />
      </Text>
      <Badge tone="neutral">{cohort.status}</Badge>
    </div>
  )
}
