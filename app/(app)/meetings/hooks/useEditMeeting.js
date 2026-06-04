'use client'

import { useActionState, useEffect } from 'react'
import { editMeetingAction } from '../actions/editMeeting'

export function useEditMeeting(onSaved) {
  const [state, action] = useActionState(editMeetingAction, null)

  useEffect(() => {
    if (state?.ok) onSaved()
  }, [state, onSaved])

  return { action }
}
