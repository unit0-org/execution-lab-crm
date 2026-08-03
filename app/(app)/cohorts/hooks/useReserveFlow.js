'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { runPreview } from './runPreview'
import { runReserve } from './runReserve'

// Two steps: name the person, then read (and edit) the email they will
// get. Nothing is written until that email is sent, so backing out of the
// review leaves no half-made reservation behind.
export function useReserveFlow(cohortId, onClose) {
  const router = useRouter()
  const [draft, setDraft] = useState(null)
  const [busy, setBusy] = useState(false)

  const edit = (field, value) =>
    setDraft((cur) => ({ ...cur, [field]: value }))

  return {
    draft,
    busy,
    edit,
    preview: (person) =>
      runPreview(cohortId, person, { setBusy, setDraft }),
    send: () => runReserve(draft, { setBusy, onClose, router }),
    back: () => setDraft(null)
  }
}
