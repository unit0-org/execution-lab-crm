const keyOf = (n) => `${n.question}\n${n.answer}`

// Drop repeat answers to the same question (the same fact restated
// across events), keeping the first — newest — occurrence.
export function dedupeNuggets(nuggets) {
  const seen = new Set()

  return nuggets.filter((n) => {
    const key = keyOf(n)

    if (seen.has(key)) return false

    seen.add(key)

    return true
  })
}
