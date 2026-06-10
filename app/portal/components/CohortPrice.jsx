import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Text } from '@/ui/atoms/Text'
import { formatMoney } from '@/lib/purchase/controllers/formatMoney'
import { EarlyBirdBadge } from './EarlyBirdBadge'

// A cohort's current price + early-bird marker; muted when unavailable.
export function CohortPrice({ pricing }) {
  if (pricing.amountCents === null) {
    return <Text tone="muted">Price unavailable</Text>
  }

  return (
    <Stack gap="xs">
      <Heading level={3} gutter="none">
        {formatMoney(pricing.amountCents, 'cad')}
      </Heading>
      <EarlyBirdBadge pricing={pricing} />
    </Stack>
  )
}
