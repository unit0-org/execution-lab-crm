'use client'

import { Stack } from '@/ui/layout/Stack'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { useToggle } from '@/ui/molecules/useToggle'
import { RegistrationsTable } from './RegistrationsTable'
import { ReserveSeatModal } from './ReserveSeatModal'

// The cohort's roster, headed by the + that reserves a seat for someone.
export function CohortRegistrants({ cohortId, registrations, contacts }) {
  const modal = useToggle()

  return (
    <Stack gap="sm">
      <SectionHeader title="Registrants" addLabel="Reserve a seat"
        onAdd={modal.show} />
      <RegistrationsTable registrations={registrations} />
      <ReserveSeatModal open={modal.open} onClose={modal.hide}
        cohortId={cohortId} contacts={contacts} />
    </Stack>
  )
}
