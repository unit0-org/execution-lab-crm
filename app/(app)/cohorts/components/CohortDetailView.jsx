'use client'

import { Stack } from '@/ui/layout/Stack'
import { CohortHeader } from './CohortHeader'
import { RegistrationsTable } from './RegistrationsTable'

// A cohort's header plus everyone registered for it.
export function CohortDetailView({ cohort, registrations }) {
  return (
    <Stack gap="lg">
      <CohortHeader cohort={cohort} />
      <RegistrationsTable registrations={registrations} />
    </Stack>
  )
}
