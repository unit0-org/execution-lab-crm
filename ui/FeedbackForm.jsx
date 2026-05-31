'use client'

import { useActionState, useEffect, useRef } from 'react'
import { useToast } from './Toaster'

// Project server actions take FormData and return {ok, error}; useActionState
// wants (prev, fd) → next. Bridge the shapes, toast on completion, and fire
// onSuccess so callers can close/reset after a successful run. Children should
// include a SubmitButton (or SubmitTextButton).
const adapt = (action) => (_prev, fd) => action(fd)

export function FeedbackForm({ action, success, onSuccess, display = 'block', children }) {
  const [state, formAction] = useActionState(adapt(action), null)
  const { push } = useToast()
  const seen = useRef(null)

  useEffect(() => {
    if (!state || state === seen.current) return
    seen.current = state
    const failed = state.ok === false
    push({ tone: failed ? 'error' : 'success', message: failed ? (state.error || 'Failed') : success })
    if (!failed) onSuccess?.()
  }, [state, success, onSuccess, push])

  return <form action={formAction} style={{ display, margin: 0 }}>{children}</form>
}
