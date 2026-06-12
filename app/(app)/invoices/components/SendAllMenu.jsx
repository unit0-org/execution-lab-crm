'use client'

import { useState } from 'react'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { Popover } from '@/ui/molecules/Popover'
import { Button } from '@/ui/atoms/Button'

export function SendAllMenu({ show, disabled, onSendAll }) {
  const [open, setOpen] = useState(false)

  if (!show) return null

  const trigger = (
    <IconButton label="More send options" disabled={disabled}
      onClick={() => setOpen(true)}>
      <Icon name="chevron" size={16} />
    </IconButton>
  )

  return (
    <Popover open={open} onClose={() => setOpen(false)} trigger={trigger}
      align="end">
      <Button size="sm" onClick={onSendAll}>Send all</Button>
    </Popover>
  )
}
