'use client'

import { useActionState, useEffect, useRef } from 'react'
import { useToast } from './Toaster'

// Server actions in this project take FormData and return {ok, error}.
// useActionState expects (prev, fd) → next; this bridges the shapes.
const adapt = (action) => (_prev, fd) => action(fd)

// Wraps a server action so the form shows a toast on completion.
// Children should include a SubmitButton (or SubmitTextButton).
export function FeedbackForm({ action, success, display = 'block', children }) {
  const [state, formAction] = useActionState(adapt(action), null)
  const { push } = useToast()
  const lastSeen = useRef(null)

  useEffect(() => {
    if (!state || state === lastSeen.current) return
    lastSeen.current = state
    push({ message: state.ok === false ? (state.error || 'Failed') : success })
  }, [state, success, push])

  return <form action={formAction} style={{ display, margin: 0 }}>{children}</form>
}
