'use client'

import { Icon } from '@/ui/atoms/Icon'
import { MenuRow } from '@/ui/molecules/MenuRow'

// The destructive row in an offer's menu; the parent confirms before delete.
export function DeleteOfferMenuItem({ onClick }) {
  return (
    <MenuRow leading={<Icon name="trash" size={16} />} label="Delete offer"
      onClick={onClick} />
  )
}
