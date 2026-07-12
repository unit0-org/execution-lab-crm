import { CardGrid } from '@/ui/layout/CardGrid'
import { SharedOfferCard } from './SharedOfferCard'

// Offers shared with me as a responsive grid of read-only cards.
export function SharedOfferCards({ offers }) {
  return (
    <CardGrid align="start">
      {offers.map((offer) => (
        <SharedOfferCard key={offer.id} offer={offer} />
      ))}
    </CardGrid>
  )
}
