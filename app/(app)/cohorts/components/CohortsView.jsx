'use client'

import { Stack } from '@/ui/layout/Stack'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { useCohorts } from '../hooks/useCohorts'
import { useCohortModal } from '../hooks/useCohortModal'
import { CohortsList } from './CohortsList'
import { CohortFormModal } from './CohortFormModal'

export function CohortsView({ initialCohorts }) {
  const { cohorts, reload } = useCohorts(initialCohorts)
  const modal = useCohortModal()
  const onSaved = () => { modal.close(); reload() }

  return (
    <Stack gap="md">
      <SectionHeader title="Cohorts" addLabel="New cohort"
        onAdd={modal.openCreate} />
      <CohortsList cohorts={cohorts} onChanged={reload}
        onEdit={modal.openEdit} />
      <CohortFormModal open={modal.open} onClose={modal.close}
        cohort={modal.editing} onSaved={onSaved} />
    </Stack>
  )
}
