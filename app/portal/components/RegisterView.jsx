'use client'

import { Card } from '@/ui/atoms/Card'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { OrderSummary } from './OrderSummary'
import { RegisterForm } from './RegisterForm'

// The full register screen: order summary + payment form (Stories 2.2–2.3).
// An invite prefills the form and lets the holder claim a freed seat (3.2).
export function RegisterView({ cohort, invite }) {
  return (
    <Card>
      <Stack gap="md">
        <Heading level={1} gutter="none">{cohort.label}</Heading>
        <OrderSummary cohort={cohort} />
        <RegisterForm cohortId={cohort.id} invite={invite} />
      </Stack>
    </Card>
  )
}
