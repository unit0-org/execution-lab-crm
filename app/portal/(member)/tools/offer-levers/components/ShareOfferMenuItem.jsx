'use client'

import { Icon } from '@/ui/atoms/Icon'
import { MenuRow } from '@/ui/molecules/MenuRow'

// Opens the share dialog; the parent hoists it above the card link.
export function ShareOfferMenuItem({ onClick }) {
  return (
    <MenuRow leading={<Icon name="users" size={16} />} label="Share offer"
      onClick={onClick} />
  )
}
