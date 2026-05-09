// Run `fn` over `items` with at most `limit` in flight at once.
// Preserves order of inputs; returns array of results.
export async function mapWithLimit(items, limit, fn) {
  const out = new Array(items.length)
  let i = 0
  const next = async () => {
    while (true) {
      const idx = i++
      if (idx >= items.length) return
      out[idx] = await fn(items[idx], idx)
    }
  }
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, next))
  return out
}
