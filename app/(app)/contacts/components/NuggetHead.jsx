'use client'

import { GrowRow } from '@/ui/layout/GrowRow'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { FieldLabel } from './FieldLabel'

export function NuggetHead({ question, open, onToggle }) {
  const label = open ? 'Hide details' : 'Show details'

  return (
    <GrowRow>
      <FieldLabel label={question} />
      <IconButton label={label} onClick={onToggle}>
        <Icon name="chevron" size={16} />
      </IconButton>
    </GrowRow>
  )
}
