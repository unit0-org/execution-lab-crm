'use client'

import { RowDelete } from '@/ui/molecules/RowDelete'
import { BlockedDeleteButton } from './BlockedDeleteButton'
import { useDeleteCohort } from '../hooks/useDeleteCohort'

// Delete a cohort (trash + confirm), or — when something is attached to
// it — the disabled trash explaining why it has to stay.
export function CohortDeleteButton({ cohort, onChanged }) {
  const remove = useDeleteCohort(cohort.id, onChanged)

  if (cohort.deleteBlocker) {
    return <BlockedDeleteButton reason={cohort.deleteBlocker} />
  }

  return <RowDelete onConfirm={remove} title="Delete cohort" />
}
