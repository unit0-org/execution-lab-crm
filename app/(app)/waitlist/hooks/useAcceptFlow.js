'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { previewAcceptanceAction } from '../actions/previewAcceptance'
import { acceptFromWaitlistAction } from '../actions/acceptFromWaitlist'
import { acceptFinish } from './acceptFinish'

export function useAcceptFlow(onClose) {
  const router = useRouter()
  const [draft, setDraft] = useState(null)
  const [sending, setSending] = useState(false)
  const close = () => setDraft(null)
  const edit = (field, value) =>
    setDraft((prev) => ({ ...prev, [field]: value }))
  const start = (entry) =>
    previewAcceptanceAction(entry.id).then(setDraft)
  const finish = acceptFinish({ setSending, close, onClose, router })

  const send = () => {
    setSending(true)
    acceptFromWaitlistAction(draft).then(finish).catch(() => finish(null))
  }

  return { draft, sending, start, send, edit, cancel: close }
}
