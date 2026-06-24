'use client'

import { Stack } from '@/ui/layout/Stack'
import { SectionHeader } from '@/ui/molecules/SectionHeader'
import { useToggle } from '@/ui/molecules/useToggle'
import { useCohortResources } from '../hooks/useCohortResources'
import { AddResourceModal } from './AddResourceModal'
import { ResourceList } from './ResourceList'

// A cohort's session resources, with a "+" to add and per-row delete.
export function CohortResources({ cohortId, initial }) {
  const { resources, reload } = useCohortResources(cohortId, initial)
  const modal = useToggle()

  const saved = () => {
    reload()
    modal.hide()
  }

  return (
    <Stack gap="sm">
      <SectionHeader title="Resources" addLabel="Add resource"
        onAdd={modal.show} />
      <AddResourceModal open={modal.open} cohortId={cohortId}
        onSaved={saved} onClose={modal.hide} />
      <ResourceList resources={resources} onChanged={reload} />
    </Stack>
  )
}
