// The ids present in both lists. Either side may be null, meaning that
// dimension narrowed nothing — the other side then stands on its own.
export function intersectIds(left, right) {
  if (!left) return right

  if (!right) return left

  const kept = new Set(right)

  return left.filter((id) => kept.has(id))
}
