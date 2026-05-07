'use client'

import { useTransition } from 'react'

// Wraps a server action so the UI stays responsive and an after()
// callback fires when the action resolves.
export function useTransitionAction(fn, after) {
  const [, start] = useTransition()

  return (formData) => start(async () => { await fn(formData); after?.() })
}
