'use client'

import { showToast } from '@/ui/molecules/toastBus'
import { toggleAutomationAction } from '../actions/toggleAutomation'
import { deleteAutomationAction } from '../actions/deleteAutomation'

// Toggle active / delete a rule, refreshing the list afterwards.
export function useAutomationRow(automation, onChanged) {
  const toggle = () => {
    toggleAutomationAction(automation.id, !automation.is_active)
      .then(onChanged)
  }

  const remove = () => {
    deleteAutomationAction(automation.id).then(() => {
      showToast('Automation deleted')
      onChanged()
    })
  }

  return { toggle, remove }
}
