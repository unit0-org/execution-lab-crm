import { daysAgo } from './daysAgo'

const within = (date, since) => date && new Date(date) >= since
const before = (date, since) => date && new Date(date) < since

// The lead segments shown on the dashboard, in display order.
export const segmentRules = [
  {
    key: 'new',
    title: 'New this week',
    test: (s) => within(s.firstActivity, daysAgo(7))
  },
  {
    key: 'engaged',
    title: 'Engaged, no purchase',
    test: (s) => (s.checkins || s.meetings) && !s.purchases
  },
  {
    key: 'quiet',
    title: 'Gone quiet',
    test: (s) => before(s.lastActivity, daysAgo(30))
  }
]
