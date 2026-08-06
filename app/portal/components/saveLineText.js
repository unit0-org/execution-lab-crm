import { cohortMonthYear } from '@/lib/portal/cohortMonthYear'

const beforeDate = (opensAt) =>
  opensAt ? cohortMonthYear(opensAt).startLabel : 'registration opens'

// How the saving reads, by whichever discount actually earned it. Only the
// early-bird reward has a deadline (the day registration opens) — crediting
// a customer's coupon to it advertised a date that had already passed.
export function saveLineText(pricing, save, opensAt) {
  if (pricing.discountSource === 'earlybird') {
    return `Save ${save} by registering before ${beforeDate(opensAt)}`
  }

  if (pricing.discountSource === 'coupon') {
    return `Save ${save} with code ${pricing.discountCode}`
  }

  return `Save ${save} off the regular price`
}
