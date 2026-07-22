// Every unordered pair drawn from the ids, each ordered canonically
// (a < b) to match the dismissal table's unique key.
export function canonicalPairs(ids) {
  return ids.flatMap((a, i) =>
    ids.slice(i + 1).map((b) => order(a, b))
  )
}

const order = (a, b) => {
  const [lo, hi] = [a, b].sort()

  return { contact_a_id: lo, contact_b_id: hi }
}
