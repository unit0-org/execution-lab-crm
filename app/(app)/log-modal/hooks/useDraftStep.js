'use client'

import { useState, useTransition } from 'react'
import { parseDraft } from '../actions'

// Holds the modal flow state: input text, parsed draft, current step.
export function useDraftStep() {
  const [text, setText] = useState('')
  const [draft, setDraft] = useState(null)
  const [, start] = useTransition()

  const reset = () => { setText(''); setDraft(null) }
  const submitText = () => {
    const fd = new FormData(); fd.set('text', text)
    start(async () => { setDraft(await parseDraft(fd)) })
  }

  return { text, setText, draft, setDraft, submitText, reset }
}
