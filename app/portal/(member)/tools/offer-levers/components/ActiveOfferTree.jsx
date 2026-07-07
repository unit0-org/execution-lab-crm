import { ActiveOfferCard } from './ActiveOfferCard'
import { treeStyle } from './ActiveOfferTree.styles'

// The active offers as cards branching off a spine connected to the card
// above. Hidden until the toggle is opened.
export function ActiveOfferTree({ offers, open }) {
  if (!open) return null

  return (
    <div style={treeStyle}>
      {offers.map((offer) => (
        <ActiveOfferCard key={offer.id} value={offer.value} />
      ))}
    </div>
  )
}
