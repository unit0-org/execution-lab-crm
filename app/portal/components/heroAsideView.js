import { stateTone } from './stateTone'
import { formatDollars } from '@/lib/portal/formatDollars'

// View data for the hero's price + scarcity aside. A sold-out cohort hides
// its price; the scarcity line carries "Sold out" instead.
export function heroAsideView(card, action) {
  const regular = card.pricing.regularCents
  const soldOut = action.state === 'full'

  return {
    kicker: card.pricing.discounted ? 'Launch price' : 'Price',
    price: soldOut ? null : formatDollars(card.pricing.amountCents),
    regular: soldOut || !regular ? null : formatDollars(regular),
    tone: stateTone(action.state)
  }
}
