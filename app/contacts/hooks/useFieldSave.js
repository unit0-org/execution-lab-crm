'use client'

import { useActionState, useEffect } from 'react'
import { updateContactAction } from '../actions/updateContact'

const run = (prev, formData) => updateContactAction(formData)

export function useFieldSave(onSaved) {
  const [state, action] = useActionState(run, null)

  useEffect(() => {
    if (state?.ok) onSaved()
  }, [state, onSaved])

  return { action }
}
