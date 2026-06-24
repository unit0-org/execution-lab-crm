'use client'

import { useState } from 'react'
import { Icon } from '@/ui/atoms/Icon'
import { MenuRow } from '@/ui/molecules/MenuRow'
import { ConfirmDialog } from '@/ui/molecules/ConfirmDialog'
import { useMarkRegistrationPaid } from '../hooks/useMarkRegistrationPaid'

// Mark a registrant paid out-of-band, behind a confirm dialog.
export function MarkPaidMenuItem({ registrationId, onDone }) {
  const [open, setOpen] = useState(false)
  const markPaid = useMarkRegistrationPaid(registrationId)

  const confirm = () => {
    setOpen(false)
    onDone()
    markPaid()
  }

  return (
    <>
      <MenuRow leading={<Icon name="check" size={16} />}
        label="Mark as paid" onClick={() => setOpen(true)} />
      <ConfirmDialog open={open} title="Mark as paid?"
        message="This marks the registrant as paid."
        confirmLabel="Mark as paid" tone="primary"
        onConfirm={confirm} onCancel={() => setOpen(false)} />
    </>
  )
}
