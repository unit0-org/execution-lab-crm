'use client'

import { useState } from 'react'
import { Button } from '../atoms/Button'
import { Inline } from '../layout/Inline'
import { TrashIcon } from '../atoms/TrashIcon'

// A trash button that asks to confirm before firing onConfirm.
export function RowDelete({ onConfirm }) {
  const [confirming, setConfirming] = useState(false)

  if (confirming) {
    return (
      <Inline gap="sm">
        <Button tone="danger" size="sm" onClick={onConfirm}>Delete</Button>
        <Button size="sm" onClick={() => setConfirming(false)}>Cancel</Button>
      </Inline>
    )
  }

  return (
    <Button tone="danger" size="sm" aria-label="Delete"
      onClick={() => setConfirming(true)}>
      <TrashIcon />
    </Button>
  )
}
