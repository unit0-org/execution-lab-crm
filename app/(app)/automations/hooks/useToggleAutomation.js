'use client'

import { toggleAutomationAction } from '../actions/toggleAutomation'

// Flip a rule's active flag, refreshing the list afterwards.
export function useToggleAutomation(automation, onChanged) {
  return () => {
    toggleAutomationAction(automation.id, !automation.is_active)
      .then(onChanged)
  }
}
