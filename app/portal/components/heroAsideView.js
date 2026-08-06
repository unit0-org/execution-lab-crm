import { stateTone } from './stateTone'
import { formatDollars } from '@/lib/portal/formatDollars'

// View data for the hero's price + scarcity aside. A sold-out cohort hides
// its price; the scarcity line carries "Sold out" instead. Only the cohort's
// own preset discount is a "Launch price" — a coupon just lowers the price.
export function heroAsideView(card, action) {
  const regular = card.pricing.regularCents
  const soldOut = action.state === 'full'
  const isLaunch = card.pricing.discountSource === 'launch'

  return {
    kicker: isLaunch ? 'Launch price' : 'Price',
    price: soldOut ? null : formatDollars(card.pricing.amountCents),
    regular: soldOut || !regular ? null : formatDollars(regular),
    tone: stateTone(action.state)
  }
}
