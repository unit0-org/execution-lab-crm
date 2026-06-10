import { Stack } from '@/ui/layout/Stack'
import { Text } from '@/ui/atoms/Text'
import { DateText } from '@/ui/atoms/DateText'
import { formatMoney } from '@/lib/purchase/controllers/formatMoney'

const PROGRAM = 'The Execution Lab'

// What the applicant is buying: program, cohort, start date and price.
export function OrderSummary({ cohort, pricing }) {
  if (pricing.amountCents === null) {
    return <Text tone="muted">Price unavailable</Text>
  }

  return (
    <Stack gap="xs">
      <Text tone="muted">{PROGRAM} — {cohort.label}</Text>
      <Text tone="muted">Starts <DateText value={cohort.start_date} /></Text>
      <Text>{formatMoney(pricing.amountCents, 'cad')}</Text>
    </Stack>
  )
}
