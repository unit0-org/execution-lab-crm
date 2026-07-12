'use client'

import { useToggle } from '@/ui/molecules/useToggle'
import { IconButton } from '@/ui/atoms/IconButton'
import { Icon } from '@/ui/atoms/Icon'
import { ShareOfferModal } from './ShareOfferModal'

// Owner-only control on the configurator header: opens the share dialog to
// grant other portal people view + comment access to this offer.
export function ShareOfferButton({ offerId }) {
  const modal = useToggle()

  return (
    <>
      <IconButton label="Share offer" onClick={modal.toggle}>
        <Icon name="users" />
      </IconButton>
      <ShareOfferModal offerId={offerId} open={modal.open}
        onClose={modal.toggle} />
    </>
  )
}
