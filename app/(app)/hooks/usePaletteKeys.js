'use client'

// Enter opens the first (auto-selected) result; a no-op when empty.
export function usePaletteKeys(results, onPick) {
  return (event) => {
    if (event.key !== 'Enter') return

    const first = results[0]

    if (first) onPick(first.id)
  }
}
