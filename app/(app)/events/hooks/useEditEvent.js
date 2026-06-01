'use client'

import { useActionState, useEffect } from 'react'
import { editEventAction } from '../actions/editEvent'

export function useEditEvent(onSaved) {
  const [state, action] = useActionState(editEventAction, null)

  useEffect(() => {
    if (state?.ok) onSaved()
  }, [state, onSaved])

  return { action }
}
