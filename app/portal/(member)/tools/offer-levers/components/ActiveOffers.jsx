import { ActiveOffersToggle } from './ActiveOffersToggle'
import { ActiveOfferTree } from './ActiveOfferTree'

// A card's active generated offers: a count pill that expands a connected
// tree of them. Renders nothing when the offer has none active.
export function ActiveOffers({ offers, open, onToggle }) {
  if (!offers.length) return null

  return (
    <>
      <ActiveOffersToggle count={offers.length} open={open}
        onToggle={onToggle} />
      <ActiveOfferTree offers={offers} open={open} />
    </>
  )
}
