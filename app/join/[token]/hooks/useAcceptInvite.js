'use client'

import { useActionState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { acceptFounderInviteAction } from '../../actions/acceptFounderInvite'

// Submit the org name; on success land in the new organization's app,
// otherwise surface the error inline.
export function useAcceptInvite() {
  const router = useRouter()
  const run = (prev, formData) => acceptFounderInviteAction(formData)
  const [state, action] = useActionState(run, null)

  useEffect(() => {
    if (state?.ok) router.push('/dashboard')
  }, [state, router])

  return { action, error: state?.error }
}
