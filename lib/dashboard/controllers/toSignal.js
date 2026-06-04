import { firstOf, lastOf } from './signalDates'

const num = (v) => Number(v || 0)

// A merged contact signal: counts, spend, activity span, customer flag.
export function toSignal(entry) {
  const e = entry.events || {}
  const m = entry.meetings || {}
  const p = entry.purchases || {}

  return {
    contactId: entry.contactId,
    checkins: num(e.count),
    meetings: num(m.count),
    purchases: num(p.count),
    spendCents: num(p.total),
    isCustomer: num(p.max) >= 10000,
    eventLast: e.last || null,
    meetingLast: m.last || null,
    purchaseLast: p.last || null,
    firstActivity: firstOf(e.first, m.first, p.first),
    lastActivity: lastOf(e.last, m.last, p.last)
  }
}
