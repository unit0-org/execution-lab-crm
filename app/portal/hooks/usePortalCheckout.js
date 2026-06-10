'use client'

import { useActionState, useEffect } from 'react'
import { createCheckoutAction } from '../actions/createCheckout'

const redirect = (state) => {
  if (state?.url) window.location.assign(state.url)

  if (state?.waitlist) window.location.assign('/waitlist')
}

// Drive the public checkout action: on success send the browser to Stripe,
// on a full cohort send it to the waitlist, and surface any error string.
export function usePortalCheckout(cohortId) {
  const run = (prev, fd) => createCheckoutAction(cohortId, fd)
  const [state, action] = useActionState(run, null)

  useEffect(() => redirect(state), [state])

  return { action, error: state?.error }
}
