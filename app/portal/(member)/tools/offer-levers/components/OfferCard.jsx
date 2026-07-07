'use client'

import { useToggle } from '@/ui/molecules/useToggle'
import { OfferCardLink } from './OfferCardLink'
import { ActiveOffers } from './ActiveOffers'
import { cardWrapStyle } from './OfferCard.styles'

// An offer card plus, when it has active offers, an expandable tree of them
// connected beneath it.
export function OfferCard({ offer, onRemove }) {
  const tree = useToggle()
  const active = offer.activeOffers || []

  return (
    <div style={cardWrapStyle}>
      <OfferCardLink offer={offer} onRemove={onRemove} />
      <ActiveOffers offers={active} open={tree.open} onToggle={tree.toggle} />
    </div>
  )
}
