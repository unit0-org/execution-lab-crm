import { spotsLabel } from './spotsLabel'
import { stateTone } from './stateTone'
import { formatDollars } from '@/lib/portal/formatDollars'

const NOTE = 'Quick form · ~5 min · refundable to 2 wks before'

// View data for the hero's price + scarcity aside.
export function heroAsideView(card, action) {
  const regular = card.pricing.regularCents

  return {
    kicker: card.pricing.earlyBird ? 'Launch price' : 'Price',
    price: formatDollars(card.pricing.amountCents),
    regular: regular ? formatDollars(regular) : null,
    spots: spotsLabel(card),
    tone: stateTone(action.state),
    note: NOTE
  }
}
