'use client'

import { useToggle } from '@/ui/molecules/useToggle'
import { SharedOfferCardLink } from './SharedOfferCardLink'
import { ActiveOffers } from './ActiveOffers'
import { cardWrapStyle } from './OfferCard.styles'

// A shared offer as a read-only card: opens the read view, and expands its
// active generated offers like an owned card — but has no edit controls.
export function SharedOfferCard({ offer }) {
  const tree = useToggle()
  const active = offer.activeOffers || []

  return (
    <div style={cardWrapStyle}>
      <SharedOfferCardLink offer={offer} />
      <ActiveOffers offers={active} open={tree.open} onToggle={tree.toggle} />
    </div>
  )
}
