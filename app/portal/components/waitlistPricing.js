import { waitlistOptions } from './waitlistOptions'

// The price to advertise on the waitlist: the chosen cohort's (when it's a
// joinable option), else the soonest joinable one. Cohorts share a price, so
// this stays stable as the picker selection changes.
export function waitlistPricing(cards, slug) {
  const options = waitlistOptions(cards)
  const pick = options.some((o) => o.value === slug) ? slug : options[0]?.value
  const card = cards.find((c) => c.slug === pick)

  return card ? card.pricing : null
}
