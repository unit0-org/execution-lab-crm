const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const has = (list, value) => list.some((o) => o.value === value)

const matches = (option, q) => option.label.toLowerCase().includes(q)

const rawOption = (q) => ({
  value: `email:${q}`, label: `Add ${q}`, email: q
})

// Contact matches for the query, plus an "add email" row when the query
// is an email that isn't already chosen.
export function attendeeOptions(all, query, chosen) {
  const q = query.trim().toLowerCase()

  if (!q) return []

  const found = all.filter((o) => matches(o, q))
    .filter((o) => !has(chosen, o.value)).slice(0, 6)

  if (!EMAIL.test(q) || has(chosen, `email:${q}`)) return found

  return [...found, rawOption(q)]
}
