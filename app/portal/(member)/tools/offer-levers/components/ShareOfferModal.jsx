'use client'

import { TitledModal } from '@/ui/organisms/TitledModal'
import { useOfferShares } from '../hooks/useOfferShares'
import { toShareOptions } from '../toShareOptions'
import { ShareList } from './ShareList'

// Owner dialog to pick which portal people can view + comment on this offer.
export function ShareOfferModal({ offerId, open, onClose }) {
  const { people, toggle } = useOfferShares(offerId, open)
  const { options, selected } = toShareOptions(people)

  return (
    <TitledModal open={open} title="Share offer" onClose={onClose}>
      <ShareList options={options} selected={selected} onToggle={toggle} />
    </TitledModal>
  )
}
