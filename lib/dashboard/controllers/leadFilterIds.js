import { mergeSignals } from './mergeSignals'
import { daysAgo } from './daysAgo'

const within = (date, since) => date && new Date(date) >= since

const PREDICATES = {
  new: (s) => !s.isCustomer && within(s.firstActivity, daysAgo(7)),
  active: (s) => !s.isCustomer && within(s.lastActivity, daysAgo(30)),
  customers: (s) => s.isCustomer
}

// Contact ids matching a dashboard stat filter (new / active /
// customers), within an organization.
export async function leadFilterIds(organizationId, filter) {
  const signals = await mergeSignals(organizationId)

  return signals.filter(PREDICATES[filter]).map((s) => s.contactId)
}
