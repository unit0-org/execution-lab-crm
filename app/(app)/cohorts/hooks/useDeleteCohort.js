'use client'

import { useActionHandler } from '@/app/(app)/hooks/useActionHandler'
import { deleteCohortAction } from '../actions/deleteCohort'

// Delete a cohort, toast the outcome (the server's refusal reason when it
// declines), and refresh the list so the row disappears.
export function useDeleteCohort(id, onChanged) {
  const remove = useActionHandler(deleteCohortAction, {
    onDone: onChanged, toast: 'Cohort deleted'
  })

  return () => remove(id)
}
