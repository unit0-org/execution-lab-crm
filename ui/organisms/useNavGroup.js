import { useState } from 'react'

// A sidebar category: collapsed by default; tap to toggle.
// Opens (without effects) when navigation lands on one of its links.
export function useNavGroup(items, currentPath) {
  const holdsCurrent = items.some((item) => item.href === currentPath)
  const [open, setOpen] = useState(false)
  const [wasHolding, setWasHolding] = useState(holdsCurrent)

  if (holdsCurrent !== wasHolding) {
    setWasHolding(holdsCurrent)

    if (holdsCurrent) setOpen(true)
  }

  return { open, toggle: () => setOpen((value) => !value) }
}
