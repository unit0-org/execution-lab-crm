const put = (query, name, value) => value && query.set(name, value)

// A drill-in link that carries the dashboard's own period and type, so
// the page it opens resolves the same events the tile counted and the
// two numbers agree. `extra` names what to select there — an attendance
// status for a participation list, a funnel stage for a people list.
export function drillHref(path, filter, extra = {}) {
  const query = new URLSearchParams()

  put(query, 'period', filter.period)
  put(query, 'type', filter.type)

  for (const [name, value] of Object.entries(extra)) put(query, name, value)

  return `${path}?${query.toString()}`
}
