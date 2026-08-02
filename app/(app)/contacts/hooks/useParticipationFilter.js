'use client'

import { useRouter } from 'next/navigation'
import { toggledValues } from './toggledValues'
import { participationUrl } from './participationUrl'

// The event-participation filter: attendance statuses and events, held in
// the URL (?statuses=…&events=…). Toggling navigates, so the server
// re-queries the list — this filter cannot be applied client-side.
export function useParticipationFilter(criteria) {
  const router = useRouter()
  const go = (next) => router.push(participationUrl(next))

  return {
    statuses: criteria.statuses,
    events: criteria.events,
    toggleStatus: (value) =>
      go({ ...criteria, statuses: toggledValues(criteria.statuses, value) }),
    toggleEvent: (value) =>
      go({ ...criteria, events: toggledValues(criteria.events, value) })
  }
}
