'use client'

import { useActionState, useEffect } from 'react'

export function useFormAction(serverAction, onDone) {
  const run = (prev, formData) => serverAction(formData)
  const [state, action] = useActionState(run, null)

  useEffect(() => {
    if (state?.ok) onDone()
  }, [state, onDone])

  return { action }
}
