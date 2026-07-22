// Group {id, key} rows by key, dropping blank keys and singletons; returns
// arrays of the distinct ids that share a key (the duplicate candidates).
export function groupIds(rows) {
  const byKey = new Map()

  for (const { id, key } of rows) {
    if (!key) continue

    const ids = byKey.get(key) || new Set()
    ids.add(id)
    byKey.set(key, ids)
  }

  const groups = [...byKey.values()].map((set) => [...set])

  return groups.filter((ids) => ids.length > 1)
}
