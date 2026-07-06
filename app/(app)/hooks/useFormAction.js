'use client'

import { useActionState, useEffect, useRef } from 'react'

// Drive a server action from a form, firing onDone once it succeeds and
// surfacing any error string for inline display. The one shared copy — used
// by every module's forms.
export function useFormAction(serverAction, onDone) {
  const run = (prev, formData) => serverAction(formData)
  const [state, action] = useActionState(run, null)
  const onDoneRef = useRef(onDone)

  useEffect(() => {
    onDoneRef.current = onDone
  })

  useEffect(() => {
    if (state?.ok) onDoneRef.current()
  }, [state])

  return { action, error: state?.error }
}
