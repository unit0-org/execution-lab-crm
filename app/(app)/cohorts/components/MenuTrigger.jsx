'use client'

import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'

// The three-dots button that opens a registrant's operations menu.
export function MenuTrigger({ onClick }) {
  return (
    <IconButton label="Registrant actions" onClick={onClick}>
      <Icon name="more" size={16} />
    </IconButton>
  )
}
