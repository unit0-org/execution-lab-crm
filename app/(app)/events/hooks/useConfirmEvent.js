'use client'

import { useActionState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { updateEventAction } from '../actions/updateEvent'

export function useConfirmEvent() {
  const router = useRouter()
  const [state, action] = useActionState(updateEventAction, null)

  useEffect(() => {
    if (state?.ok) router.push('/events')
  }, [state, router])

  return { action }
}
