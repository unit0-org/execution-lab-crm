const splitValues = (raw) => (raw ? raw.split(',').filter(Boolean) : [])

// The contacts list criteria carried by the URL: the lead filter chip
// plus the event-participation filter (?statuses=…&events=…).
export function toContactsCriteria(params = {}) {
  return {
    filter: params.filter || null,
    statuses: splitValues(params.statuses),
    events: splitValues(params.events)
  }
}

// The criteria as query values, for links that must keep them.
export function criteriaParams(criteria) {
  return {
    statuses: criteria.statuses.join(','),
    events: criteria.events.join(',')
  }
}

// A stable key for one set of criteria — remounts the list when it moves.
export const criteriaKey = (criteria) => JSON.stringify(criteria)
