'use client'

import { useActionState } from 'react'
import { createContactType } from '../actions'

export function useCreateContactType() {
  const [state, action, pending] = useActionState(createContactType, null)

  return { action, state, pending }
}
