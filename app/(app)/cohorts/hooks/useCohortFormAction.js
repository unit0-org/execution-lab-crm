'use client'

import { createCohortAction } from '../actions/createCohort'
import { updateCohortAction } from '../actions/updateCohort'
import { useFormAction } from '@/app/(app)/hooks/useFormAction'

// Pick create vs update (binding the id) for a cohort form and wire it
// through useFormAction.
export function useCohortFormAction(cohort, onSaved) {
  const serverAction = cohort
    ? (formData) => updateCohortAction(cohort.id, formData)
    : createCohortAction

  return useFormAction(serverAction, onSaved)
}
