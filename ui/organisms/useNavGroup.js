import { useState } from 'react'

// A sidebar category: collapsed by default; tap to toggle. Opens (without
// effects) when navigation lands on one of its links — including the very
// first paint, so arriving straight at /purchases doesn't hide the page
// you're on inside a folded-up Sales.
export function useNavGroup(items, currentPath) {
  const holdsCurrent = items.some((item) => item.href === currentPath)
  const [open, setOpen] = useState(holdsCurrent)
  const [wasHolding, setWasHolding] = useState(holdsCurrent)

  if (holdsCurrent !== wasHolding) {
    setWasHolding(holdsCurrent)

    if (holdsCurrent) setOpen(true)
  }

  return { open, toggle: () => setOpen((value) => !value) }
}
