'use client'

import { useActionState } from 'react'
import { logEntry } from '../actions'

// Wraps the logEntry server action. Returns the action prop for the
// form, the latest result state, and whether a submission is pending.
export function useLogEntry() {
  const [state, action, pending] = useActionState(logEntry, null)
  return { action, state, pending }
}
