'use client'

import { useState } from 'react'
import { IconButton } from '../atoms/IconButton'
import { Icon } from '../atoms/Icon'
import { ConfirmDialog } from './ConfirmDialog'

// A trash icon that opens a confirm dialog before firing onConfirm.
export function RowDelete({ onConfirm, title = 'Delete' }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  const confirm = () => {
    close()
    onConfirm()
  }

  return (
    <>
      <IconButton tone="danger" label={title} onClick={() => setOpen(true)}>
        <Icon name="trash" size={16} />
      </IconButton>
      <ConfirmDialog open={open} title={title} onConfirm={confirm}
        onCancel={close} />
    </>
  )
}
