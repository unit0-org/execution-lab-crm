'use client'

import { showToast } from '@/ui/molecules/toastBus'
import { removeCohortFolderAction } from '../actions/removeCohortFolder'

const feedback = (result) => showToast(result?.error || 'Folder deleted')

// Delete a folder (and its resources), toast the outcome, then reload.
export function useRemoveFolder(onChanged) {
  return (id, cohortId) =>
    removeCohortFolderAction(id, cohortId).then(feedback).then(onChanged)
}
