'use client'

import { Card } from '@/ui/atoms/Card'
import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { Text } from '@/ui/atoms/Text'
import { WaitlistForm } from './WaitlistForm'

// The public join screen (Story 3.1): one global waitlist across cohorts.
export function WaitlistJoin() {
  return (
    <Card>
      <Stack gap="md">
        <Heading level={1} gutter="none">Join the waitlist</Heading>
        <Text>
          We&apos;ll email you when a spot opens in any cohort.
        </Text>
        <WaitlistForm />
      </Stack>
    </Card>
  )
}
