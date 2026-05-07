// Synchronous derivation: labels[] → { id: label }
export function useLabelIndex(labels) {
  return Object.fromEntries(labels.map((l) => [l.id, l]))
}
