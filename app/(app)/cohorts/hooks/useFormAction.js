'use client'

import { useActionState, useEffect } from 'react'

// Drive a server action from a form, firing onDone once it succeeds and
// surfacing any error string for inline display.
export function useFormAction(serverAction, onDone) {
  const run = (prev, formData) => serverAction(formData)
  const [state, action] = useActionState(run, null)

  useEffect(() => {
    if (state?.ok) onDone()
  }, [state, onDone])

  return { action, error: state?.error }
}
