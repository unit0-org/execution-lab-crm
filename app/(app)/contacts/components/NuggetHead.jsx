'use client'

import { GrowRow } from '@/ui/layout/GrowRow'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'

export function NuggetHead({ open, onToggle, children }) {
  const label = open ? 'Hide details' : 'Show details'

  return (
    <GrowRow>
      {children}
      <IconButton label={label} onClick={onToggle}>
        <Icon name="chevron" size={16} />
      </IconButton>
    </GrowRow>
  )
}
