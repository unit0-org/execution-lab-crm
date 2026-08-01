import { qualifyingPurchaseDates } from './qualifyingPurchaseDates'
import { paidRegistrationDates } from './paidRegistrationDates'
import { indexEarliest } from './indexEarliest'

// Contact → the date they became a client, by either route in customerRule
// (a $100+ purchase or a paid registration), whichever came first.
export async function clientDates() {
  const [purchases, registrations] = await Promise.all([
    qualifyingPurchaseDates(), paidRegistrationDates()
  ])
  const dates = new Map()

  indexEarliest(dates, purchases)
  indexEarliest(dates, registrations)

  return dates
}
