const norm = (s) => (s || '').trim().toLowerCase()

const byMatchPosition = (q) => (a, b) =>
  norm(a.label).indexOf(q) - norm(b.label).indexOf(q)

// Options whose label contains the query, best matches first, capped.
export function matchOptions(options, query, limit = 5) {
  const q = norm(query)
  const hits = options.filter((o) => norm(o.label).includes(q))

  return hits.sort(byMatchPosition(q)).slice(0, limit)
}

// True when an option's label exactly equals the query.
export function hasExactLabel(options, query) {
  const q = norm(query)

  return options.some((o) => norm(o.label) === q)
}
