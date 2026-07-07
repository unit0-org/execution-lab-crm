import { CardGrid } from '@/ui/layout/CardGrid'
import { EmptyState } from '@/ui/molecules/EmptyState'
import { OfferCard } from './OfferCard'

// The offers as a responsive grid of cards, or an empty state prompting
// the first one.
export function OfferCards({ offers, onRemove, onBumpVersion }) {
  if (!offers.length)
    return (
      <EmptyState title="No offers yet"
        message="Use + to create your first offer." />
    )

  return (
    <CardGrid>
      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} onRemove={onRemove}
          onBumpVersion={onBumpVersion} />
      ))}
    </CardGrid>
  )
}
