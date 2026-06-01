'use client'

import { useState } from 'react'
import { Button } from '../atoms/Button'
import { IconButton } from '../atoms/IconButton'
import { Icon } from '../atoms/Icon'
import { Inline } from '../layout/Inline'

// A trash icon that asks to confirm before firing onConfirm.
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
    <IconButton label="Delete" onClick={() => setConfirming(true)}>
      <Icon name="trash" size={16} />
    </IconButton>
  )
}
