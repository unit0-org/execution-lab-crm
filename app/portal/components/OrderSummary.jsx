import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { DateText } from '@/ui/atoms/DateText'

const PROGRAM = 'The Execution Lab'

// What the applicant is buying: program, cohort and start date.
export function OrderSummary({ cohort }) {
  return (
    <Stack gap="xs">
      <Text tone="muted">{PROGRAM} — {cohort.label}</Text>
      <Text tone="muted">Starts <DateText value={cohort.start_date} /></Text>
    </Stack>
  )
}
