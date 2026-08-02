function setListParam(url, name, values) {
  if (values.length) url.searchParams.set(name, values.join(','))
  else url.searchParams.delete(name)
}

// The contacts URL for these criteria, keeping every other query param
// (the lead filter chip, the label filter's ?labels=…) intact.
export function participationUrl(criteria) {
  const url = new URL(window.location.href)

  setListParam(url, 'statuses', criteria.statuses)
  setListParam(url, 'events', criteria.events)

  return `${url.pathname}${url.search}`
}
