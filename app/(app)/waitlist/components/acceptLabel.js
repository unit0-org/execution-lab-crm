// The accept button's label; flags an overfill when the cohort is full.
export function acceptLabel(full) {
  if (full) return 'Accept anyway'

  return 'Accept into cohort'
}
