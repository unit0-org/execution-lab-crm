'use client'

import { Stack } from '@/ui/layout/Stack'
import { Heading } from '@/ui/atoms/Heading'
import { CohortForm } from './CohortForm'
import { useCohortFormNav } from '../hooks/useCohortFormNav'

// The cohort create/edit form as a full page — it has too many fields to
// sit comfortably in a modal.
export function CohortFormView({ cohort }) {
  const onSaved = useCohortFormNav(cohort?.id)
  const title = cohort ? 'Edit cohort' : 'New cohort'

  return (
    <Stack gap="md">
      <Heading>{title}</Heading>
      <CohortForm cohort={cohort} onSaved={onSaved} />
    </Stack>
  )
}
