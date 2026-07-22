const norm = (value) => (value || '').trim().toLowerCase()

// Results (people or companies) whose name contains the query, capped to a
// short list. An empty query keeps the most recent (already newest-first).
export function matchPeople(people, query) {
  const q = norm(query)
  const hits = people.filter((person) => norm(person.name).includes(q))

  return hits.slice(0, 8)
}
