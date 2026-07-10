import { firstQualifyingPurchases } from './firstQualifyingPurchases'
import { firstPaidRegistrations } from './firstPaidRegistrations'
import { toNewCustomers } from './toNewCustomers'

// Contacts who crossed into "customer" in the last 7 days — their first
// qualifying purchase or first paid registration landed this week.
export async function newCustomers() {
  const [purchases, registrations] = await Promise.all([
    firstQualifyingPurchases(),
    firstPaidRegistrations()
  ])

  return toNewCustomers(purchases, registrations)
}
