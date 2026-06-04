import { ago } from './ago'

const plural = (n, word) => `${n} ${word}${n === 1 ? '' : 's'}`

// Short reasons a lead deserves attention, newest signal first.
export function reasonsFor(s) {
  const parts = [
    s.purchaseLast && `Bought ${ago(s.purchaseLast)}`,
    s.checkins && plural(s.checkins, 'event'),
    s.meetingLast && `Met ${ago(s.meetingLast)}`
  ]

  return parts.filter(Boolean)
}
