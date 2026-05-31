'use client'

import { useActionState } from 'react'
import { createContactAction } from '../actions'

const adapt = (prev, formData) => createContactAction(formData)

export function useContactForm() {
  const [state, action] = useActionState(adapt, null)

  return { action, error: state?.error }
}
