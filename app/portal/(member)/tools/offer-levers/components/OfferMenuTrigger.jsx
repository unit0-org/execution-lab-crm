'use client'

import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'

// The three-dot button that opens an offer card's actions menu.
export function OfferMenuTrigger({ onClick }) {
  return (
    <IconButton label="Offer actions" onClick={onClick}>
      <Icon name="more" size={16} />
    </IconButton>
  )
}
