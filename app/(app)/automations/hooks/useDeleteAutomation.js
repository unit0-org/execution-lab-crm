'use client'

import { showToast } from '@/ui/molecules/toastBus'
import { deleteAutomationAction } from '../actions/deleteAutomation'

// Delete a rule, toast, refresh the list, then close the confirm dialog.
export function useDeleteAutomation(automation, onChanged, onDone) {
  return () => {
    deleteAutomationAction(automation.id).then(() => {
      showToast('Automation deleted')
      onChanged()
      onDone()
    })
  }
}
