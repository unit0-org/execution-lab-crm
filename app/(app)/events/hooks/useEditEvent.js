'use client'

import { useActionState, useEffect, useRef } from 'react'
import { editEventAction } from '../actions/editEvent'

// `handled` makes this fire once per result. Without it the callback the
// caller passes — a refresh whose identity changes on every render —
// re-triggers this effect, which refreshes again, endlessly.
export function useEditEvent(onSaved) {
  const [state, action] = useActionState(editEventAction, null)
  const handled = useRef(null)

  useEffect(() => {
    if (!state || handled.current === state) return

    handled.current = state

    if (state.ok) onSaved()
  }, [state, onSaved])

  return { action }
}
