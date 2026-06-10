'use client'

import { Card } from '@/ui/atoms/Card'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { OrderSummary } from './OrderSummary'
import { RegisterForm } from './RegisterForm'

// The full register screen: order summary + payment form (Stories 2.2–2.3).
export function RegisterView({ cohort, pricing }) {
  return (
    <Card>
      <Stack gap="md">
        <Heading level={1} gutter="none">{cohort.label}</Heading>
        <OrderSummary cohort={cohort} pricing={pricing} />
        <RegisterForm cohortId={cohort.id} />
      </Stack>
    </Card>
  )
}
