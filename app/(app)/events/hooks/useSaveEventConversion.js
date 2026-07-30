'use client'

import { useActionState, useEffect, useRef } from 'react'
import { showToast } from '@/ui/molecules/toastBus'
import { saveEventConversionAction } from '../actions/saveEventConversion'

// Saving changes nothing on screen beyond what was already typed, so the
// toast is the feedback.
//
// `handled` makes this fire once per result. Without it the callback the
// caller passes — a refresh whose identity changes on every render —
// re-triggers this effect, which refreshes again: an endless loop that
// stacks a toast per pass.
export function useSaveEventConversion(onSaved) {
  const [state, action] = useActionState(saveEventConversionAction, null)
  const handled = useRef(null)

  useEffect(() => {
    if (!state || handled.current === state) return

    handled.current = state
    showToast(state.message)

    if (state.ok) onSaved()
  }, [state, onSaved])

  return { action }
}
