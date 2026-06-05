'use client'

import { GrowRow } from '@/ui/layout/GrowRow'
import { Inline } from '@/ui/layout/Inline'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { NuggetTools } from './NuggetTools'

export function NuggetHead({ nugget, open, onToggle, onChanged, children }) {
  const label = open ? 'Hide details' : 'Show details'

  return (
    <GrowRow>
      {children}
      <Inline gap="sm" nowrap>
        <NuggetTools nugget={nugget} onChanged={onChanged} />
        <IconButton label={label} onClick={onToggle}>
          <Icon name="chevron" size={16} />
        </IconButton>
      </Inline>
    </GrowRow>
  )
}
