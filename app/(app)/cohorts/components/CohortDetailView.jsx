'use client'

import { Stack } from '@/ui/layout/Stack'
import { ButtonLink } from '@/ui/atoms/ButtonLink'
import { CohortHeader } from './CohortHeader'
import { RegistrationsTable } from './RegistrationsTable'

const registerHref = (id) => `/portal/register/${id}`

// A cohort's header, a link to its public registration page, and
// everyone registered for it.
export function CohortDetailView({ cohort, registrations }) {
  return (
    <Stack gap="lg">
      <CohortHeader cohort={cohort} />
      <ButtonLink href={registerHref(cohort.id)} target="_blank">
        Registration page
      </ButtonLink>
      <RegistrationsTable registrations={registrations} />
    </Stack>
  )
}
