'use client'

import { useActionState } from 'react'
import { joinWaitlistAction } from '../actions/joinWaitlist'

// Drive the public waitlist-join action: expose its error and a `joined`
// flag so the form can swap to a thank-you message on success.
export function useWaitlistJoin() {
  const [state, action] = useActionState(joinWaitlistAction, null)

  return { action, error: state?.error, joined: Boolean(state?.ok) }
}
