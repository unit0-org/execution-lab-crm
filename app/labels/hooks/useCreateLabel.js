'use client'

import { useActionState } from 'react'
import { createLabel } from '../actions'

export function useCreateLabel() {
  const [state, action, pending] = useActionState(createLabel, null)

  return { action, state, pending }
}
