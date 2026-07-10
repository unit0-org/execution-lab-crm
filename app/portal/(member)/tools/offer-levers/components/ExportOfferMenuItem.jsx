'use client'

import { Icon } from '@/ui/atoms/Icon'
import { MenuRow } from '@/ui/molecules/MenuRow'
import { portalRoutePath } from '@/lib/portal/portalRoutePath'

// Opens the offer's branded PDF in a new tab, then closes the menu.
export function ExportOfferMenuItem({ offerId, onDone }) {
  const href = portalRoutePath(`/tools/offer-levers/${offerId}/pdf`)

  const open = () => {
    onDone()
    window.open(href, '_blank', 'noopener')
  }

  return (
    <MenuRow leading={<Icon name="file" size={16} />} label="Export PDF"
      onClick={open} />
  )
}
