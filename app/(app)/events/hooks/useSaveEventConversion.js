'use client'

import { useActionState, useEffect } from 'react'
import { showToast } from '@/ui/molecules/toastBus'
import { saveEventConversionAction } from '../actions/saveEventConversion'

// Saving changes nothing on screen beyond what was already typed, so the
// toast is the feedback.
export function useSaveEventConversion(onSaved) {
  const [state, action] = useActionState(saveEventConversionAction, null)

  useEffect(() => {
    if (!state) return

    showToast(state.message)

    if (state.ok) onSaved()
  }, [state, onSaved])

  return { action }
}
