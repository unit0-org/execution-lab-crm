import { useState } from 'react'

// Tracks which waitlist entry's submission is open in the detail modal.
export function useWaitlistSelection() {
  const [selected, setSelected] = useState(null)

  const clear = () => setSelected(null)

  return { selected, select: setSelected, clear }
}
