// Chunk a list into pairs so each renders as a two-column row.
export function toPairs(items) {
  const pairs = []

  for (let i = 0; i < items.length; i += 2)
    pairs.push(items.slice(i, i + 2))

  return pairs
}
