// Canonical key for an unordered contact pair, so (a, b) and (b, a) map to
// one dismissal row and one lookup key.
export function pairKey(idA, idB) {
  return [idA, idB].sort().join(':')
}
