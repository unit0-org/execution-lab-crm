'use client'

import { useState } from 'react'
import { importIntoEventAction } from '../actions/importIntoEvent'

export function useReimport(eventId, onUpdated) {
  const [busy, setBusy] = useState(false)

  const onPick = (event) => {
    const file = event.target.files[0]

    if (!file) return

    setBusy(true)
    const data = new FormData()
    data.append('file', file)
    data.append('eventId', eventId)
    importIntoEventAction(data).then(() => {
      setBusy(false)
      onUpdated()
    })
  }

  return { busy, onPick }
}
