'use client'

import { useState } from 'react'
import { showToast } from '@/ui/molecules/toastBus'
import { sendDigestNowAction } from '../actions/sendDigestNow'
import { sendDigestMessage } from './sendDigestMessage'

// Send the digest immediately: show progress, then toast the outcome.
export function useSendDigest() {
  const [sending, setSending] = useState(false)

  const done = (result) => showToast(sendDigestMessage(result))

  const send = () => {
    setSending(true)
    sendDigestNowAction().then(done).finally(() => setSending(false))
  }

  return { sending, send }
}
