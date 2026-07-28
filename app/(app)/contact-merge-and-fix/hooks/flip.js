// Add or remove a key from a Set, immutably.
export function flip(keys, key) {
  const next = new Set(keys)

  if (next.has(key)) next.delete(key)
  else next.add(key)

  return next
}
