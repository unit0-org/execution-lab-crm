'use client'

import { showToast } from '@/ui/molecules/toastBus'
import { removeCohortResourceAction } from '../actions/removeCohortResource'

const feedback = (result) => showToast(result?.error || 'Resource deleted')

// Delete a resource, toast the outcome, then reload the list.
export function useRemoveResource(onChanged) {
  return (id, cohortId) =>
    removeCohortResourceAction(id, cohortId).then(feedback).then(onChanged)
}
