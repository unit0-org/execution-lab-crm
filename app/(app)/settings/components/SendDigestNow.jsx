'use client'

import { Button } from '@/ui/atoms/Button'
import { useSendDigest } from '../hooks/useSendDigest'

// The "Send it now" button — builds and emails the digest immediately,
// bypassing the Monday guard, and toasts the outcome.
export function SendDigestNow() {
  const { sending, send } = useSendDigest()

  return (
    <Button onClick={send} loading={sending}>
      Send it now
    </Button>
  )
}
