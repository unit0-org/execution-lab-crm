'use client'

import { useActionState } from 'react'
import { joinWaitlistAction } from '../actions/joinWaitlist'

// Drive the public waitlist-join action: expose its error, a `joined`
// flag, and the result (position/wave/email) for the confirmation.
export function useWaitlistJoin() {
  const [state, action] = useActionState(joinWaitlistAction, null)

  return {
    action,
    error: state?.error,
    joined: Boolean(state?.ok),
    result: state
  }
}
