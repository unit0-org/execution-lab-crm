const splitValues = (raw) => (raw ? raw.split(',').filter(Boolean) : [])

// The contacts list criteria carried by the URL: the lead filter chip,
// the event-participation filter (?statuses=…&events=…), and a dashboard
// drill-in (?stage=…&period=…&type=…) which names a funnel stage and the
// events it was measured over rather than listing ids.
export function toContactsCriteria(params = {}) {
  return {
    filter: params.filter || null,
    statuses: splitValues(params.statuses),
    events: splitValues(params.events),
    stage: params.stage || null,
    period: params.period || null,
    type: params.type || null
  }
}

// The criteria as query values, for links that must keep them.
export function criteriaParams(criteria) {
  return {
    statuses: criteria.statuses.join(','),
    events: criteria.events.join(','),
    stage: criteria.stage || '',
    period: criteria.period || '',
    type: criteria.type || ''
  }
}

// A stable key for one set of criteria — remounts the list when it moves.
export const criteriaKey = (criteria) => JSON.stringify(criteria)
